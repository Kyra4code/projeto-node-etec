 function createUser(name, email, password, typeUser){
    const sql = "insert into tbl_usuario(nome, email, senha, tipo_usuario) values(?,?,?,?)";

    const infoUser = [name, email, password, typeUser];
}

export default createUser;