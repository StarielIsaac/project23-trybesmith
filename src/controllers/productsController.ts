import { Request, Response } from 'express';
import productService from '../services/productService';

// Função para registrar um novo produto
async function registerProduct(req: Request, res: Response) {
  // Obter os valores do corpo da requisição
  const values = req.body;
  // Chamar o serviço de produtos para registrar um novo produto
  const product = await productService.registerProduct(values);
  // Retornar uma resposta com o produto registrado
  return res.status(201).json(product);
}
// Função  para encontrar todos os produtos
async function findAllProducts(_req: Request, res: Response) {
  // Chamar o serviço de produtos para encontrar todos os produtos
  const product = await productService.findAllProducts();
  // Retornar uma resposta com os produtos encontrados
  return res.status(200).json(product);
}

export default {
  registerProduct,
  findAllProducts,
};