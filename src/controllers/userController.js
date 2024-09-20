import express, { request, response } from 'express'
import createUser from '../services/userService.js';

const route = express.Router();

route.get('/', (request, response)=>{
    return response.status(200).send({"message": "Listagem de usuarios realizada com sucesso!"})
});

route.post("/", (request, response) =>{
    const {name, email, password, typeUser} = request.body;

    createUser(name, email, password, typeUser);

    if(typeUser.toUpperCase() != "ADMINISTRADOR" && typeUser.toUpperCase() != "COMUM"){
        return response.status(400).send({"message": "Selecione apenas Administrador ou Comum"});
    }

    console.log(name)
    console.log(email)
    console.log(password)
    console.log(typeUser)
});

export default route;