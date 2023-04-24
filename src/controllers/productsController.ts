import { Request, Response } from 'express';
import productService from '../services/productService';

async function registerProduct(req: Request, res: Response) {
  const values = req.body;
  const product = await productService.registerProduct(values);
  return res.status(201).json(product);
}

export default {
  registerProduct,
};