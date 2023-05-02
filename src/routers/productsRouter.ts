import { Router } from 'express';
import productsController from '../controllers/productsController';
import valitateName from '../middleware/valitateName';
import valitateAmount from '../middleware/validateAmount';

// Cria a instância do router
const productsRouter = Router();

// define uma rota para buscar todos os produtos
productsRouter.get('', productsController.findAllProducts);
// define uma rota para registrar um novo produto, que deve passar pelas validações de nome e quantidade
productsRouter.post('', valitateName, valitateAmount, productsController.registerProduct);

export default productsRouter;
