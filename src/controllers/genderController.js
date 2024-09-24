import express, { request, response } from "express";
import salvar from '../services/genderService.js';


const route = express.Router();

route.get("/", (request, response)=>{
    return response.status(200).send({"message": "Cadastro de generos completa!"})
})

route.post("/", async (request, response)=>{
    const {genero} = request.body;

    await salvar.Creategender(genero);
    return response.status(201).send({"message": "Cadastro de genero feito com sucesso!"})
})

export default route;