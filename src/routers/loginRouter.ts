import { Router } from 'express';
import validateLogin from '../middleware/validateLogin';
import loginController from '../controllers/loginController';

// Cria a instância do router
const loginRouter = Router();

// Rota para realizar login
loginRouter.post('', validateLogin, loginController.loginUser);

export default loginRouter;
