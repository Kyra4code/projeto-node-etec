import express, { request } from "express";
import reset from '../services/resetService.js';
import creates from '../helpers/createCode.js' 

const route = express.Router();

route.post('/reset', async(req, res)=>{
    const {email} = req.body;

    const verify = await reset.checkEmail(email)

    if (verify.length > 0){
        const senha = await creates.createNewPassword();
        await reset.updatePassword(email, senha);
    }else{
        
    }
})

export default route;