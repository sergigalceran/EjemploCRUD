var persona = require('./modelo/alumno');
var persona = require('./modelo/asignatura');
var Controller = require ('./controllerA');
var Controller2 = require ('./controllerS');


module.exports = function(app) {

// Alumnos -------------------------------------------------------------
	// devolver todos los Alumnos
	app.get('/api/alumnos', Controller.getAlumno);
	app.get('/api/alumno/:alumno_id', Controller.getAlumno2);
	// Crear un nuevo Alumno
	app.post('/api/alumno', Controller.setAlumno);
	// Modificar los datos de un Alumno
	app.put('/api/alumno/:alumno_id', Controller.updateAlumno);
	// Borrar un Alumno
	app.delete('/api/alumno/:alumno_id', Controller.removeAlumno);
	// Asignaturas -------------------------------------------------------------
	app.get('/api/subjects', Controller2.getSubjects);
	app.post('/api/subject', Controller2.setSubject);
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
