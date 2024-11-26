import database from '../database/mysql.js'

async function checkEmail(email){
    const sql = "Select * from tbl_usuario where email = ? and senha = ?";
    const infos = [email]

    const conexao = await database.connectDB();
    const [rows] = await conexao.query(sql, infos);
    await conexao.end();
    return rows;
}

async function updatePassword(newPassword, email){
    const sql = "update tbl_usuario set senha = ? where email = ?";
    const infos = [newPassword, email]

    const conexao = await database.connectDB();
    await conexao.query(sql, infos);
    await conexao.end();
}

export default {checkEmail, updatePassword}