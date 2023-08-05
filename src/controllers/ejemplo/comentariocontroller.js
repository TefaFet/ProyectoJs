const comentarioModels = require('../../models/ejemplo/comentarioModels');


async function listarejemplocontroller(req, res){
    const ejemplocontroller = await comentarioModels().listarcomentarioModels();
    res.render('ejemplo/comentario_view',{ejemplocontroller});

}

async function listarejemplodoscontroller(req, res){
    const ejemplocontroller = await comentarioModels().listarcomentarioModels();
    res.render('ejemplo/comentariodos_view',{ejemplocontroller});

}

module.exports = {

    listarejemplocontroller,
    listarejemplodoscontroller
}
