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

//router.get('/tu_cocteleria', async(req,res)=>{
  //  const usua = await pool.query('select * form usuarios');
    //res.render('links/tu_cocteleria',{usua});



    router.get('/vista_principal',(req,res)=>{
        res.render('links/vista_principal');
   });
   

    router.get('/tu_cocteleria',(req,res)=>{
        res.render('links/tu_cocteleria');
   });
   
router.get('/quienes_somos',(req,res)=>{
    res.render('links/quienes_somos')

});
router.get('/la_tienda',(req,res)=>{
    res.render('links/la_tienda')

});
router.get('/coctelescon_alcohol',(req,res)=>{
    res.render('links/coctelescon_alcohol')

});
router.get('/coctelessin_alcohol',(req,res)=>{
    res.render('links/coctelessin_alcohol')

});
router.get('/el_blog',(req,res)=>{
    res.render('links/el_blog')

});

router.get('/consumo_responsable',(req,res)=>{
    res.render('links/consumidor_responsable')

});

router.get('/blog_tu_cocteleria',(req,res)=>{
    res.render('links/blog_tu_cocteleria')

});
router.get('/blog_coctelerados',(req,res)=>{
    res.render('links/blog_coctelerados')

});

router.get('/formulario_cocteleria',(req,res)=>{
    res.render('links/formulario_cocteleria')

});
router.get('/tipos_cocteles',(req,res)=>{
    res.render('links/tipos_cocteles')

});

router.get('/cocteles_dos',(req,res)=>{
    res.render('links/cocteles_dos')

});

router.get('/contacto',(req,res)=>{
    res.render('links/contacto')

});

router.get('/ubicados_local',(req,res)=>{
    res.render('links/ubicados_local')

});

router.get('/primera',(req,res)=>{
    res.render('links/primera')

});

router.get('/dos',(req,res)=>{
    res.render('links/dos')

});

//clase
router.get('/alumnos',(req,res)=>{
    res.render('links/alumnos')

});
router.get('/consumir',(req,res)=>{
    res.render('links/consumir')

});


//administrador
router.get('/administrador',(req,res)=>{
    res.render('links/administrador')

});




module.exports= router;