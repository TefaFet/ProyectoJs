const mensajeModels = require('../../models/Cocteleria/mensajeModels');


async function listarCocteleriacontroller(req, res){
    const Cocteleriacontroller = await mensajeModels().listarmensajeModels();
    res.render('Cocteles/mensaje_view',{Cocteleriacontroller});

}
// dos
async function listarCocteleriadoscontroller(req, res){
    const Cocteleriadoscontroller = await mensajeModels().listarmensajeModels();
    res.render('Cocteles/Resultados_view',{Cocteleriadoscontroller});

}

async function cargarCocteleriadoscontroller(req, res){
    const Cocteleriadoscontroller = await mensajeModels().listarmensajeModels();
    res.render('Cocteles/Resultados_view',{Cocteleriadoscontroller});

}


module.exports = {
    listarCocteleriacontroller,
    listarCocteleriadoscontroller,
    cargarCocteleriadoscontroller

}