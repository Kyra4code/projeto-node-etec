import express from 'express';
import login from './controller/loginController.js'

const routes = express.Router();

routes.use('/login', login)

export default routes;