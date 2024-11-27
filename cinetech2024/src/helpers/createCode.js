import jwt from 'jsonwebtoken';
require('dotenv').config();

function createNewPassword(){
    const key = (Math.random() + 1).toString(36).substring(2).substring(0,7);
    const newKey = key.replace("a","0").replace("b", "A").replace("e", "#").replace("f", "!").replace("3", "D")

    return newKey;
}

function generateToken(id_login, user_name){
    const secret = "pumbalapumba"
    return jwt.sign({infoUser: {id_login, user_name: user_name}}, secret, {expiresIn: 60 * 60 *5});
}

export default {createNewPassword, generateToken};