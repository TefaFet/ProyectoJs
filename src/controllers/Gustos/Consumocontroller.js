const ConsumoModels = require ('../../models/GustosM.js/ConsumoModels')


async function listarConsumo(req,res){
//en el res render se pone el mismo nombre que se  pone en la const
const listar_Consumo = await ConsumoModels().consultarConsumo();
res.render('links/consumir', {listar_Consumo}); 
}

async function creacionConsumo(req,res){
    const datos_consumo = req.body;
    await ConsumoModels().createConsumos(datos_consumo);
    res.redirect('/comentariado/listarConsumo');
}


module.exports={
    listarConsumo,
    creacionConsumo

}