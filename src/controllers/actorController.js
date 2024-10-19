import express, { request, response } from 'express';
import conexao from '../services/actorService.js';

const route = express.Router();

route.post('/', async(request, response)=>{
    const {nome, sexo, dtn} = request.body;

    await conexao.insertAtor(nome, sexo, dtn);
    return response.status(201).send({"message": "Ator cadastrado com sucesso!"});
})

route.put("/:idActor", async(request, response)=>{
    const {idActor} = request.params;
    const {nome, dtn, sex} = request.body;

    await conexao.updateAtor(idActor, nome, sex, dtn);
    return response.status(200).send({"message": "Ator atualizado com sucesso!"});
})

route.get('/', async(request, response)=>{
    const dados = await conexao.pushAtor();

    return response.status(200).send({'message': dados});
})

route.delete('/:Id', async(request, response)=>{
    const {Id} = request.params;

    await conexao.deleteAtor(Id);
    return response.status(200).send({'message': 'Ator deletado com sucesso!'})
})

export default route