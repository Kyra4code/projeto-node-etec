import database from "../database/mysql.js"

async function createUser(name, email, password, typeUser){
    const sql = "insert into tbl_usuario(nome, email, senha, tipo_usuario) values(?,?,?,?)";

    const infoUser = [name, email, password, typeUser];

    const connection = await database.connectDB();
    await connection.query(sql, infoUser);
    await connection.end();
}

async function updateUser(name, email, password, typeUser, idUser){
    const sql = "update tbl_usuario set nome = ?, email = ?, senha = ?, tipo_usuario = ? where id_usuario= ? and deletado = 0";

    const infoUser = [name, email, password, typeUser, idUser];

    const connection = await database.connectDB();
    await connection.query(sql, infoUser);
    await connection.end();
}

async function pushDados(){
    const sql = 'select * from tbl_usuario where deletado = 0'

    const connection = await database.connectDB();
    const [rows] = await connection.query(sql);
    await connection.end();
    return rows;
}

async function deleteUser(idUser){
    const sql = "update tbl_usuario set deletado = 1 where id_usuario = ?"

    const connection = await database.connectDB();
    await connection.query(sql, idUser);
    await connection.end();
}

export default {createUser, updateUser, pushDados, deleteUser};