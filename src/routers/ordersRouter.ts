import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import validateTokenMidd from '../middleware/validateToken';
import validateProducts from '../middleware/validateProducts';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.findAllOrders);
ordersRouter.post('/', validateTokenMidd, validateProducts, ordersController.createOrder);

export default ordersRouter;
