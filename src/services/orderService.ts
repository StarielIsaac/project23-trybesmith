import { OrderWithIdAssociates, CreateNewOrder } from '../types/Order';
import orderModel from '../models/orderModel';

async function findAllOrders(): Promise <OrderWithIdAssociates[]> {
  const orders = await orderModel.findAllOrders();
  
  return orders;
}

async function createOrder(order: CreateNewOrder, id: number): Promise <OrderWithIdAssociates> {
  const orders = await orderModel.createOrder(order, id);
  return orders;  
}

export default {  
  findAllOrders,
  createOrder,
};