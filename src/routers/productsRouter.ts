import { Router } from 'express';
import productsController from '../controllers/productsController';
import valitateName from '../middleware/valitateName';
import valitateAmount from '../middleware/validateAmount';

const productsRouter = Router();

productsRouter.get('', productsController.findAllProducts);
productsRouter.post('', valitateName, valitateAmount, productsController.registerProduct);

export default productsRouter;
