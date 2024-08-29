import express from "express";

const server = express();

server.listen(3333, ()=>{
    console.log("servidor ligado ☢☢☢")
})

server.get("/usuario", (request, response)=>{
    return response.status(200).send({"message": "Meu primeiro endpoint."})
})