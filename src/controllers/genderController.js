import express, { request, response } from "express";
import conexao from '../services/genderService.js';

const route = express.Router();

route.post("/", async (request, response)=>{
    const {genero} = request.body;

    await conexao.Creategender(genero);
    return response.status(201).send({"message": "Cadastro de genero feito com sucesso!"})
})

route.put('/:idGender', async(request, response)=>{
    const {idGender} = request.params;
    const {Gender} = request.body;

    await conexao.updateGender(Gender, idGender);
    return response.status(200).send({"message": "Genero atualizado com sucesso"});
});

route.get('/', async(request, response)=>{
    const dados = await conexao.listGenders();

    return response.status(200).send({'message': dados})
});

route.delete('/:idGender', async(request, response)=>{
    const {idGender} = request.params;

    await conexao.deleteGender(idGender);
    return response.status(200).send({'message': 'Genero deletado com sucesso!'});
})


export default route;