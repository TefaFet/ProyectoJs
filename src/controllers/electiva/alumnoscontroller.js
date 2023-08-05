const AlumnosModels = require ('../../models/electivaM/AlumnosModels')


async function listarAlumnos(req,res){
//en el res render se pone el mismo nombre que se  pone en la const
const listar_alumnos = await AlumnosModels().consultarAlumnos();
res.render('links/alumnos', {listar_alumnos}); 
}

async function creacionAlumnos(req,res){
    const datos_alumnos = req.body;
    await AlumnosModels().createAlumnos(datos_alumnos);
    res.redirect('/ultimaclase/listarAlumnos');
}

async function eliminarAlumnos(req,res){
   const id_alumnos = req.params.id;
  await AlumnosModels().deleteAlumnos(id_alumnos);
   res.redirect('/ultimaclase/listarAlumnos');
}


module.exports={
    listarAlumnos,
    creacionAlumnos,
   eliminarAlumnos

}