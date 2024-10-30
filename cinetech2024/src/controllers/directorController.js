import express, { request, response } from "express";
import conexao from '../services/directoService.js';

const route = express.Router();

route.post("/", async (request, response)=>{
    const {nome_director, nacionalidade, dt_nascimento, sexo} = request.body;

    await conexao.createDirector(nome_director, nacionalidade, dt_nascimento, sexo);
    return response.status(201).send({"message": "Cadastro do diretor feito com sucesso!!"})

});

route.put('/:idDirector', async(request, response)=>{
    const {idDirector} = request.params;
    const {no, na, dtn, sex} = request.body;

    await conexao.updateDiretor(idDirector, no, na, dtn, sex);
    return response.status(200).send({"message": "Diretor atulizado por completo"})
})

route.get('/', async(request, response)=>{
    const dadosD = await conexao.pushDiretor();

    return response.status(200).send({'message': dadosD})
})

route.delete('/:idDirector', async(request, response)=>{
    const {idDirector} = request.params;

    await conexao.deleteDiretor(idDirector);
    return response.status(200).send({'message': 'Diretor deletado com sucesso!'});
})
export default route;