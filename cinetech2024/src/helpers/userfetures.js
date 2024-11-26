import jwt from 'jsonwebtoken'

function generateToken(id_login, user_name){
    return jwt.sign({infoUser: {id_login, user_name: user_name}}, secret, {expiresIn: 60 * 60 *5});
}

export default {generateToken}