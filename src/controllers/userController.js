import express, { request, response } from 'express'
import service from '../services/userService.js';

const route = express.Router();

route.get('/', (request, response)=>{
    return response.status(200).send({"message": "Listagem de usuarios realizada com sucesso!"})
});

route.post("/", async (request, response) =>{
    const {name, email, password, typeUser} = request.body;

    if(typeUser.toUpperCase() != "ADMINISTRADOR" && typeUser.toUpperCase() != "COMUM"){
        return response.status(400).send({"message": "Selecione apenas Administrador ou Comum"});
    }

    await service.createUser(name, email, password, typeUser);
    return response.status(201).send({"message": "usuário cadastrado com sucesso!"})

});

export default route;