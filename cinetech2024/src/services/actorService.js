import database from '../database/mysql.js';

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

async function deleteAtor(idActor) {
    const sql = "update tbl_ator set deletado = 1 where id_ator = ?";

    const connection = database.connectDB();
    await connection.query(sql, idActor);
    await connection.end();
}

async function pushAtor() {
    const sql = "select * from tbl_ator where deletado = 0";

    const connection = database.connectDB();
    const [rows] = await connection.query(sql, info);
    await connection.end();
    return rows;
}

export default {insertAtor, updateAtor, deleteAtor, pushAtor }