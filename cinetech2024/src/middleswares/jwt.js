import { response } from 'express';
import jwt from 'jsonwebtoken';
require('dotenv').config();

async function verifyJWT(req, res, next){

    const authHeader = req.headers.authorization;
    if(!authHeader) return res.status(401).send({'message':'token não informado'})

    const parts = authHeader.split(' ');
    if(parts.length !== 2) return res.status(401).send({'message': 'Token inválido'});

    const [scheme, token] = parts;

    if(!/Bearer$/i.test(scheme)) return res.status(401).send({'message': 'Token Inválido'})

    jwt.verify(token, process.env.secret, (err, decoded)=>{
        if(err) return res.status().send({'message': 'Usuário não autenticado'})
            req.infoUser = decoded.infoUser;
        return next();
    })
}

export default {verifyJWT}