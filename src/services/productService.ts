import { Product } from '../types/Product';
import productModel from '../models/productModel';

async function registerProduct(infoProduct : Product): Promise<Product> {
  const product = await productModel.registerProduct(infoProduct);
  return product;
}

export default {
  registerProduct,
};