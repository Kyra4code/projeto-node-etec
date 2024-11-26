import express from 'express';
import service from '../services/resetService.js';
import createCodeValidation from '../helpers/createCode.js';

const route = express.Router();

route.post("/", async(request, response)=>{
    const {email} = request.body;

try{
    const user = await service.checkEmail(email);
    
    if(user.length > 0){
        const senha = await createCodeValidation();
        await service.updatePassword(senha, email);
        return response.status(200).send({"message": `Sua senha foi atualizada para: ${senha}`});
    }else if(user.length <= 0){
        return response.status(404).send({"message": "usuário não foi encontrado no banco de dados da nossa empresa, tente novamente."});
    }
}catch(error){
    console.log(`O erro é ${error}`)
}
});

export default route;