import express, { request, response } from 'express';
import cadastro from '../services/actorService.js';


const route = express.Router();

route.post('/', async(request, response)=>{
    const {nome, sexo, dtn} = request.body;

    await cadastro.insertAtor(nome, sexo, dtn);
    return response.status(201).send({"message": "Ator cadastrado com sucesso!"})
})
