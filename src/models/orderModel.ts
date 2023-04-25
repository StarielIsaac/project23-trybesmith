import { RowDataPacket } from 'mysql2';
import renameUserId from '../utils/renameUserId';
import connection from './connection';
import { OrderWithIdAssociates } from '../types/Order';
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

export default {
  findAllOrders,
};