import database from "../repository/mysql.js"

async function createUser(name, email, password, typeUser){
    const sql = "insert into tbl_usuario(nome, email, senha, tipo_usuario) values(?,?,?,?)";

    const infoUser = [name, email, password, typeUser];

    const connection = await database.connectDB();
    await connection.query(sql, infoUser);
    connection.end();
}

async function updateUser(name, email, password, typeUser, idUser){
    const sql = "update tbl_usuario set name = ?, email = ?,  tipo_usuario = ? where id_usuario= ?";

    const infoUser = [name, email, password, typeUser, idUser];

    const connection = await database.connectDB();
    await connection.query(sql, infoUser);
    connection.end();
}

export default {createUser, updateUser};