import { Router } from 'express';
import usersController from '../controllers/usersController';
import valitateVocation from '../middleware/validateVocation';
import valitatePassword from '../middleware/validatePassword';
import valitateUsername from '../middleware/validateUsername';
import valitateLevel from '../middleware/validateLevel';

const usersRouter = Router();

usersRouter.post(
  '', 
  valitateLevel,
  valitateVocation, 
  valitatePassword, 
  valitateUsername, 
  usersController.createUser,
);

export default usersRouter;
