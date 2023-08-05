const {request,aplication} = require('express');
const express = require('express');
const router = express.Router();
const comentariocontroller = require('../../controllers/ejemplo/comentariocontroller');

//listar comentario router 

router.get("/", comentariocontroller.listarejemplocontroller);
router.get("/comentario", comentariocontroller.listarejemplodoscontroller);


module.exports = router