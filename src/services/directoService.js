import database from "../repository/mysql.js";

async function createDirector(nome_diretor, nacionalidade, dt_nascimento, sexo){
    const insert = "insert into tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo) values (?,?,?,?)";

    const infoDirector = [nome_diretor, nacionalidade, dt_nascimento, sexo];

    const connection = await database.connectDB();
    await connection.query(insert, infoDirector);
    connection.end();
}

export default {createDirector};