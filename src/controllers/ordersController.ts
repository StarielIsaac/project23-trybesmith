import { Request, Response } from 'express';
import orderService from '../services/orderService';
import { CreateNewOrder } from '../types/Order';

// Função para encontrar todas as ordens
async function findAllOrders(req: Request, res: Response) {
  // Chamar o serviço de ordens para encontrar todas as ordens
  const orders = await orderService.findAllOrders();

  // Retornar uma resposta com as ordens encontradas
  res.status(200).json(orders);
}

// Função assíncrona para criar uma nova ordem
async function createOrder(req: Request & { user?: number }, res: Response) {
  // Obter os valores do corpo da requisição
  const order = req.body as CreateNewOrder;

  // Obter o ID do usuário a partir da requisição
  const id = req.user || 0;

  // Chamar o serviço de ordens para criar uma nova ordem
  const newOrder = await orderService.createOrder(order, id);
  res.status(201).json(newOrder);
}

export default {
  findAllOrders,
  createOrder,
};