import express from "express";
import routes from './routes.js';

const servidor = express;

servidor.use(express.json())

servidor.listen(3000, ()=>{
    console.log('servidor aberto');
})

servidor.use('/', routes);

