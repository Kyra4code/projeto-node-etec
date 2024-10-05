import database from '../repository/mysql.js';

async function insertAtor(name, sex, dtn){
    const sql = "insert into tbl_ator(nome_ator, sexo, dt_nascimento) values (?,?,?)";
    const info = [name, sex, dtn];

    const connection = database.connectDB();
    await connection.query(sql, info);
    connection.end();
}

async function updateAtor(idActor, name, sex, dtn) {
    const sql = "update tbl_ator set nome_ator = ?, sexo = ?, dt_nascimento = ? where id_ator = ?";
    const info = [name, sex, dtn, idActor];

    const connection = database.connectDB();
    await connection.query(sql, info);
    await connection.end();
}

export default {insertAtor, updateAtor}