import express, { request, response } from "express";
import {promises as fs, readFile} from "fs";
import path from "path";

const server = express();

server.listen(3000, ()=>{
    console.log("servidor ligado ☢☢☢")
})

server.get("/", (request, response)=>{
    return response.status(200).send({"message": "Meu primeiro endpoint."})
})