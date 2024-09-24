import database from "../repository/mysql.js";

async function Creategender(genero){
    const insert = "insert into tbl_genero(genero) values (?)";

    const infoUser = [genero];

    const connection = await database.connectDB();
    await connection.query(insert, infoUser);
    connection.end();
}

export default {Creategender};