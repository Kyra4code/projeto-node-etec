import express, { request, response } from 'express'

const route = express.Router();

route.get('/', (request, response)=>{
    return response.status(200).send({"message": "Listagem de usuarios realizada com sucesso!"})
});

route.post("/", (request, response) =>{
    const {name, email, password, typeUser} = request.body

    console.log("Nome ", name )
    console.log("Email ", email )
    console.log("Senha ", password)
    console.log("typeUser ", typeUser )
});

export default route;