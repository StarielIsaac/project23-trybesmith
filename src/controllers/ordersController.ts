import { Request, Response } from 'express';
import orderService from '../services/orderService';
import { CreateNewOrder } from '../types/Order';

async function findAllOrders(req: Request, res: Response) {
  const orders = await orderService.findAllOrders();
  res.status(200).json(orders);
}

async function createOrder(req: Request & { user?: number }, res: Response) {
  const order = req.body as CreateNewOrder;
  const id = req.user || 0;

  const newOrder = await orderService.createOrder(order, id);
  res.status(201).json(newOrder);
}

export default {
  findAllOrders,
  createOrder,
};