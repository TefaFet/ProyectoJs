const express = require('express');
const router=express.Router();
const pool = require('../database');

router.get('/add',(req,res)=>{
    //res.send('oh yeah');
    res.render('links/add');
});

router.get('/inicio',(req,res)=>{
     res.render('links/inicio');
});
module.exports= router;