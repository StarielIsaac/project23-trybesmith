import { Product } from '../types/Product';
import productModel from '../models/productModel';

// Função que registra produtos
async function registerProduct(infoProduct : Product): Promise<Product> {
  // Chama a função 'registerProduct' do 'productModel' passando 'infoProduct' como parâmetro
  const product = await productModel.registerProduct(infoProduct);
  return product;
}
// Função que busca todos os produtos
async function findAllProducts(): Promise<Product[]> {
  // Chama a função 'findAllProducts' do 'productModel'
  const allProducts = await productModel.findAllProducts();
  return allProducts as Product[];
}

// Exporta as funções 'registerProduct' e 'findAllProducts'
export default {
  registerProduct,
  findAllProducts,
};