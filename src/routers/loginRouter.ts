import { Router } from 'express';
import validateLogin from '../middleware/validadeLogin';
import loginController from '../controllers/loginController';

const loginRouter = Router();

loginRouter.post('', validateLogin, loginController.loginUser);

export default loginRouter;
