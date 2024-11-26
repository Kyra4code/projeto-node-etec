import database from "../database/mysql.js";

async function createDirector(nome_diretor, nacionalidade, dt_nascimento, sexo){
    const insert = "insert into tbl_diretor(nome_diretor, nacionalidade, dt_nascimento, sexo) values (?,?,?,?)";

    const infoDirector = [nome_diretor, nacionalidade, dt_nascimento, sexo];

    const connection = await database.connectDB();
    await connection.query(insert, infoDirector);
    connection.end();
}

async function updateDiretor(idDiretor, nome, nacio, dt_nasc, sex){
    const sql = "update tbl_diretor set nome_diretor = ?, nacionalidade = ?, dt_nascimento = ?, sexo = ? where id_diretor = ?"
    const info = [nome, nacio, dt_nasc, sex, idDiretor];

    const connection = database.connectDB();
    await connection.query(sql, info)
    connection.end();
    
}

async function deleteDiretor(id_diretor){
    const sql = "update tbl_diretor set deletado = 1 where = id_diretor = ?"

    const connection = database.connectDB();
    await connection.query(sql, id_diretor)
    connection.end();
    
}

async function pushDiretor(){
    const sql = "select * from tbl_diretor where deletado = 0"

    const connection = database.connectDB();
    const [rows] = await connection.query(sql, info)
    connection.end();
    return rows;
}

export default {createDirector, updateDiretor, pushDiretor, deleteDiretor};