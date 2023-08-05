const express = require ('express')
const  router  = express.Router();
const AlumnosController = require ('../../controllers/electiva/AlumnosController');



router.get('/listarAlumnos', AlumnosController.listarAlumnos);
router.post('/listarAlumnos', AlumnosController.creacionAlumnos);
router.get('/eliminarAlumnos/:id', AlumnosController.eliminarAlumnos);


module.exports= router;