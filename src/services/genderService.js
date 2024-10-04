import database from "../repository/mysql.js";

async function Creategender(genero){
    const insert = "insert into tbl_genero(genero) values (?)";

    const infoUser = [genero];

    const connection = await database.connectDB();
    await connection.query(insert, infoUser);
    connection.end();
}

async function updateGender(gender, idGender){
    const insert = "update tbl_genero set genero = ? where id_genero = ?"

    const arrys = [gender, idGender]

    const connection = await database.connectDB();
    await connection.query(insert, arrys)
    connection.end();
}

export default {Creategender, updateGender};