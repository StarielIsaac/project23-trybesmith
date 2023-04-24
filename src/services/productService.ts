import { Product } from '../types/Product';
import productModel from '../models/productModel';

async function registerProduct(infoProduct : Product): Promise<Product> {
  const product = await productModel.registerProduct(infoProduct);
  return product;
}

async function findAllProducts(): Promise<Product[]> {
  const allProducts = await productModel.findAllProducts();
  return allProducts as Product[];
}

export default {
  registerProduct,
  findAllProducts,
};