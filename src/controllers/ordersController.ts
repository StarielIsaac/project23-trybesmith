import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function findAllOrders(req: Request, res: Response) {
  const orders = await orderService.findAllOrders();
  res.status(200).json(orders);
}

export default {
  findAllOrders,
};