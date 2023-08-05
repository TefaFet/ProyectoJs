const pool =require ('../../database');

module.exports = function (){
  async function consultarConsumo(){


    let query = 'SELECT*FROM consumo_responsable';
    return await pool.query(query);
  }

  async function createConsumos(datos){
  let query = 'insert into consumo_responsable set ?';
    return await pool.query(query,datos);
  }


  return {

    consultarConsumo,
    createConsumos
  }
}