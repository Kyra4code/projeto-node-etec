import database from '../repository/mysql.js';

const Entrar = async(email, senha)=>{
    const sql = "select * from tbl_usuario where email = ? and senha = ?";
    const infos = [email, senha];

    const connection = await database.connectDB();
    const [rows] = await connection.query(sql, infos);
    await connection.end();
    return rows;
}

export default {Entrar};