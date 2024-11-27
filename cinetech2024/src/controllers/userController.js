import express, { request, response } from 'express'
import service from '../services/userService.js';
import req from 'express/lib/request.js';

const route = express.Router();

route.get('/', async (request, response)=>{
    const result = await service.pushDados();

    if(result.length < 1){
        return response.status(204).send({'message': 'Usuario não encontrado'});
    };

    return response.status(200).send({'message': result})
});

//--------------------------------------------------POST---------------------------------------------//
route.post("/", async (request, response) =>{
    const {name, email, password, typeUser} = request.body;

    if(typeUser.toUpperCase() != "ADMINISTRADOR" && typeUser.toUpperCase() != "COMUM"){
        return response.status(400).send({"message": "Selecione apenas Administrador ou Comum"});
    }
    else if(password.lenght <= 5){
        return response.status(400).send({"message": "A senha deve conter no minimo 6 caracteres"})
    }

    await service.createUser(name, email, password, typeUser);
    return response.status(201).send({"message": "usuário cadastrado com sucesso!"})

});

route.put("/:idUser", async(request, response)=>{
    const {name, email, password, typeUser} = request.body;
    const {idUser} = request.params;

    if(typeUser.toUpperCase() != "ADMINISTRADOR" && typeUser.toUpperCase() != "COMUM"){
        return response.status(400).send({"message": "Selecione apenas Administrador ou Comum"});
    }else if(password.lenght <= 5){
        return response.status(400).send({"message": "A senha deve conter no minimo 6 caracteres"})
    }

    await service.updateUser(name, email, password, typeUser, idUser);
    return response.status(200).send({"message": "Usuario atualizado corretamente."})
});

route.delete('/:idUser', async(request, response)=>{
    try{
    const {idUser} = request.params;

    await service.deleteUser(idUser);
    return response.status(200).send({'message': 'Usuário deletado com sucesso!'})
    }catch{
        return response.send({'message': 'Não foi possível deletar o usuário, tente novamente.'})
    }
});

export default route;