var persona = require('./modelo/alumno');
var Controller = require ('./controllerA');


module.exports = function(app) {

	// devolver todos los Alumnos
	app.get('/api/alumnos', Controller.getAlumno);
	app.get('/api/alumno/:alumno_id', Controller.getAlumno2);
	// Crear un nuevo Alumno
	app.post('/api/alumno', Controller.setAlumno);
	// Modificar los datos de un Alumno
	app.put('/api/alumno/:alumno_id', Controller.updateAlumno);
	// Borrar un Alumno
	app.delete('/api/alumno/:alumno_id', Controller.removeAlumno);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
