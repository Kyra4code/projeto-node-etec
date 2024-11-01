import express from 'express';
import userController from "./controllers/userController.js";
import directorController from './controllers/directorController.js';
import genderController from './controllers/genderController.js';
import actorController from './controllers/actorController.js';
import login from './controllers/loginController.js'

const routes = express();

routes.use("/user", userController);

routes.use("/gender", genderController);

routes.use("/director", directorController);

routes.use("/actor", actorController);

routes.use('/user/login', login);

export default routes;