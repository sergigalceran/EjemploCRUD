var API = "http://localhost:3001";

var MainApp= angular.module('MainApp', []);

MainApp.controller('coreA', function($scope, $http) {
	$scope.newSubject = {
    nombre="",
    alumnos="",
    fecha= new Date()     
    };
	$scope.asignaturas = {};
	$scope.selected = false;

    $http.get(API +'/api/subjects')
        .then(function(response) {
		$scope.asignaturas = response.data;
	}, function (error){
                console.log('Error al obtener las asignaturas: ' + error.data);
        });
    
     $scope.registrarAsignatura = function() {
            $http.post(API + '/api/subject', $scope.newSubject)
            .then(function(response) {
                $scope.newSubject = {}; // Borramos los datos del formulario
                $scope.asignaturas = response.data;
            }, function(error){
                console.log('Error: ' + error.data);
            });
        };

});