const express= require("express");
const router = express.Router();
//const pool = require('../database');

router.get("/view_uno",(req,res)=>{
    res.render("partials/menu1");
});
router.get("/view_dos",(req,res)=>{
    res.render("partials/men2");
});


//render: para enviar a una vista 
//send enviar mensaje
module.exports =router;