const express = require('express');
const router=express.Router();

router.get('/agregar',(req,res)=>{
    //res.send('oh yeah');
    res.render('modulo_estudiantes/agregar');
});

router.get('/listar',(req,res)=>{
    //res.send('oh yeah');
    res.render('modulo_estudiantes/listar');
});
module.exports= router;
