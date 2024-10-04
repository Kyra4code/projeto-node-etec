import express, { request, response } from "express";
import salvar from '../services/genderService.js';
import atualizar from '../services/genderService.js'


const route = express.Router();

route.get("/", (request, response)=>{
    return response.status(200).send({"message": "Cadastro de generos completa!"})
})

route.post("/", async (request, response)=>{
    const {genero} = request.body;

    await salvar.Creategender(genero);
    return response.status(201).send({"message": "Cadastro de genero feito com sucesso!"})
})

route.put('/:idGender', async(request, response)=>{
    const {idGender} = request.params;
    const {Gender} = request.body;

    await atualizar.updateGender(Gender, idGender);
    return response.status(200).send({"message": "Genero atualizado com sucesso"});
})

export default route;