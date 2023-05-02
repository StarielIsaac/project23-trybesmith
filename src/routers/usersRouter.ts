import { Router } from 'express';
import usersController from '../controllers/usersController';
import valitateVocation from '../middleware/validateVocation';
import valitatePassword from '../middleware/validatePassword';
import valitateUsername from '../middleware/validateUsername';
import valitateLevel from '../middleware/validateLevel';

// Cria a instância do router
const usersRouter = Router();

// rota para criar um novo usuario
usersRouter.post(
  '', 
  valitateLevel,
  valitateVocation, 
  valitatePassword, 
  valitateUsername, 
  usersController.createUser,
);

export default usersRouter;
