import { Router } from 'express';
import ordersController from '../controllers/ordersController';
import validateTokenMidd from '../middleware/validateToken';
import validateProducts from '../middleware/validateProducts';

// Cria a instância do router
const ordersRouter = Router();

// Define a rota para buscar todas as ordens
ordersRouter.get('/', ordersController.findAllOrders);

// Define a rota para criar uma nova ordem
ordersRouter.post('/', validateTokenMidd, validateProducts, ordersController.createOrder);

export default ordersRouter;
