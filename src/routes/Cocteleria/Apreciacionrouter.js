const {request,aplication} = require('express');
const express = require('express');
const router = express.Router();
const mensajecontroller = require('../../controllers/Cocteleria/mensajecontroller');

//listar comentario router 

router.get("/", mensajecontroller.listarCocteleriacontroller);
router.get("/Datos_usuarios", mensajecontroller.listarCocteleriadoscontroller);
router.post('/agregarmensaje', mensajecontroller.cargarCocteleriadoscontroller);



module.exports = router