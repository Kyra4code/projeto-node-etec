import express from 'express';
import service from '../services/loginService.js'

const route = express.Router();

route.post('/', async(request, response)=>{
    try{
        const {email, password} = request.body;
    const dados = await service.Entrar(email, password);

    if(dados.length > 0 ){
        return response.send('Usuario encontrado');
    }else{
        return response.send('Usuario não encontrado no banco');
    }
}catch(error){
    console.log(error)
}
});

export default route;