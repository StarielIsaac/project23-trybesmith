import { RowDataPacket, ResultSetHeader } from 'mysql2';
import renameUserId from '../utils/renameUserId';
import connection from './connection';
import { OrderWithIdAssociates, CreateNewOrder } from '../types/Order';
// import { User } from '../types/User';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

async function findAllOrders(): Promise <OrderWithIdAssociates[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    ` 
     SELECT o.id, o.user_id, JSON_ARRAYAGG(p.id) AS productsIds
     FROM Trybesmith.orders AS o
     JOIN Trybesmith.products AS p ON p.order_id = o.id
     GROUP BY o.id;
    `,
  );

  const newResult = renameUserId(result);

  return newResult as OrderWithIdAssociates[];
}

async function createOrder(order: CreateNewOrder, id: number): Promise <OrderWithIdAssociates> {
  const { productsIds } = order;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?)`, [id]);

  await Promise.all(productsIds.map((product) => (
    connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, product],
    ))));

  const newOrder = {
    userId: id,
    productsIds,
  } as OrderWithIdAssociates;

  return newOrder;
}

export default {
  findAllOrders,
  createOrder,
};