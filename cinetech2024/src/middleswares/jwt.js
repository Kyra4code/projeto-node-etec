import { response } from 'express';
import jwt from 'jsonwebtoken';

async function verifyJWT(req, res, next){
    const secret = 'pumbalapumba';

    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).send({'message':'token não informado'})

    const parts = authHeader.split(' ');
    if(parts.length !== 2) return res.status(401).send({'message': 'Token inválido'});

    const [scheme, token] = parts;

    if(!/Bearer$/i.test(scheme)) return res.status(401).send({'message': 'Token Inválido'})

    jwt.verify(token, secret, (err, decoded)=>{
        if(err) return res.status().send({'message': 'Usuário não autenticado'})
            req.infoUser = decoded.infoUser;
        return next();
    })
}

export default {verifyJWT}