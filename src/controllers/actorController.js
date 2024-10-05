import express, { request, response } from 'express';
import cadastro from '../services/actorService.js';
import atualizacaca0 from '../services/actorService.js'

const route = express.Router();

route.post('/', async(request, response)=>{
    const {nome, sexo, dtn} = request.body;

    await cadastro.insertAtor(nome, sexo, dtn);
    return response.status(201).send({"message": "Ator cadastrado com sucesso!"});
})

route.put("/:idActor", async(request, response)=>{
    const {idActor} = request.params;
    const {nome, dtn, sex} = request.body;

    await atualizacaca0.updateAtor(idActor, nome, sex, dtn);
    return response.status(200).send({"message": "usuario atualizado com sucesso!"});
})
