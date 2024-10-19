import database from "../repository/mysql.js";

async function Creategender(genero){
    const insert = "insert into tbl_genero(genero) values (?)";

    const connection = await database.connectDB();
    await connection.query(insert, genero);
    connection.end();
}

async function updateGender(gender, idGender){
    const insert = "update tbl_genero set genero = ? where id_genero = ?"

    const arrys = [gender, idGender]

    const connection = await database.connectDB();
    await connection.query(insert, arrys)
    connection.end();
}

async function listGenders() {
    const sql = 'select * from tbl_genero where deletado = 0'

    const connection = await database.connectDB();
    const [rows] = await connection.query(sql);
    await connection.end();
    return rows;
}

async function deleteGender(idGender) {
    const sql = "update tbl_genero set deletado = 1 where id_genero = ?";

    const connection = await database.connectDB();
    await connection.query(sql, idGender);
    await connection.end();
}

export default {Creategender, updateGender, listGenders, deleteGender};