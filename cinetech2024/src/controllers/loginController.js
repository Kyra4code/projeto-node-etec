import express from 'express';
import service from '../services/loginService.js'

const route = express.Router();

route.post('/', async(request, response)=>{
    const {email, password} = request.body;
    const dados = await service.Entrar(email, password);

    if(dados.length > 0 ){
        return response.send('Usuario encontrado');
    }else{
        return response.send('Usuario não encontrado no banco');
    }
});

export default route;