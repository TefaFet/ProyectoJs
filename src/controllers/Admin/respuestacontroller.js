const respuestaModels = require('../../models/Admin/respuestaModels');


async function listarAdmincontroller(req, res){
    const Admincontroller = await respuestaModels().listarrespuestaModels();
    res.render('Administrador/admin_view',{Admincontroller});

}

async function listarAdmindoscontroller(req, res){
    const Admincontroller = await respuestaModels().listarrespuestaModels();
    res.render('Administrador/login_view',{Admincontroller});

}


module.exports = {
    listarAdmincontroller,
    listarAdmindoscontroller

}