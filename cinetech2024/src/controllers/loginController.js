import express from 'express';
import service from '../services/loginService.js'

const route = express.Router();

route.post('/', async(request, response)=>{
    const {email, password} = request.body;

    try{
    const dados = await service.Entrar(email, password);

    if(dados.length > 0){
        return response.status(200).send({"message":'Usuario encontrado'});
    }else if (!dados.length <= 0 ){
        return response.status(401).send({"message":'Usuario não encontrado no banco'});
    }
}catch(error){
    console.log(error)
}
});

export default route;