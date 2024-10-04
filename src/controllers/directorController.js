import express, { request, response } from "express";
import salvar from '../services/directoService.js';
import atualizacao from '../services/directoService.js'

const route = express.Router();

route.get("/", (request, response)=>{
    return response.status(200).send({"message": "Cadastro de generos completa!"})
})

route.post("/", async (request, response)=>{
    const {nome_director, nacionalidade, dt_nascimento, sexo} = request.body;

    await salvar.createDirector(nome_director, nacionalidade, dt_nascimento, sexo);
    return response.status(201).send({"message": "Cadastro do diretor feito com sucesso!!"})

});

route.put('/:idDirector', async(request, response)=>{
    const {idDirector} = request.params;
    const {no, na, dtn, sex} = request.body;

    await atualizacao.updateDiretor(idDirector, no, na, dtn, sex);
    return response.status(200).send({"message": "Diretor atulizado por completo"})
})

export default route;