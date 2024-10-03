import express, { request, response } from "express";
import routes from "./routes.js";

const server = express();

server.use(express.json())

server.listen(3333, ()=>{
    console.log("servidor ligado")
})

server.use("/", routes)


/*GET, PATCH, PUT, DELETE, POST*/ 
//POST -> insert
//PUT -> Update
//GET -> select
//DELETE -> delete