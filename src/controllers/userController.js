import express, { request, response } from 'express'

const route = express.Router();

route.get('/', (request, response)=>{
    return response.status(200).send({"message": "Listagem de usuarios realizada com sucesso!"})
});

export default route;