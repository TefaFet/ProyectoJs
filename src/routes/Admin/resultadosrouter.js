const {request,aplication} = require('express');
const express = require('express');
const router = express.Router();
const respuestacontroller = require('../../controllers/Admin/respuestacontroller');

//listar comentario router 

router.get("/", respuestacontroller.listarAdmincontroller);
router.get("/Registro_Login", respuestacontroller.listarAdmindoscontroller);



module.exports = router