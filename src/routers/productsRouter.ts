import { Router } from 'express';
import productsController from '../controllers/productsController';
// const userController = require('../controller/userController');
// const validadeUser = require('../middlewares/validadeUser');
// const middValidateToken = require('../middlewares/MiddTokenValidade');

const productsRouter = Router();

productsRouter.post('', productsController.registerProduct);

// productsRouter.get('',userController.listUsers);
// productsRouter.get('/:id',  userController.findOneUser);
// productsRouter.delete('/me', userController.deleteMyAccount);

export default productsRouter;
