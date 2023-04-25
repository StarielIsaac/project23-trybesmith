import { OrderWithIdAssociates } from '../types/Order';
import orderModel from '../models/orderModel';

async function findAllOrders(): Promise <OrderWithIdAssociates[]> {
  const orders = await orderModel.findAllOrders();
  
  return orders;
}

export default {  
  findAllOrders,
};