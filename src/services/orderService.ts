// Importando os tipos OrderWithIdAssociates e CreateNewOrder do arquivo Order
import { OrderWithIdAssociates, CreateNewOrder } from '../types/Order';
import orderModel from '../models/orderModel';

// Função para encontrar todas as ordens
async function findAllOrders(): Promise <OrderWithIdAssociates[]> {
  const orders = await orderModel.findAllOrders();
  
  return orders;
}
// Função para criar uma nova ordem
async function createOrder(order: CreateNewOrder, id: number): Promise <OrderWithIdAssociates> {
  const orders = await orderModel.createOrder(order, id);
  return orders;  
}
// Exportando as funções findAllOrders e createOrder
export default {  
  findAllOrders,
  createOrder,
};