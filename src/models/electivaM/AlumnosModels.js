const pool =require ('../../database');

module.exports = function (){
  async function consultarAlumnos(){


    let query = 'select * from estudiantes';
    return await pool.query(query);
  }

  async function createAlumnos(datos){
  let query = 'insert into estudiantes set ?';
    return await pool.query(query,datos);
  }


  async function deleteAlumnos(datos){
    let query = 'delete from estudiantes where id=?';
      return await pool.query(query,datos);
    }


  return {

    consultarAlumnos,
    createAlumnos,
    deleteAlumnos
  }
}