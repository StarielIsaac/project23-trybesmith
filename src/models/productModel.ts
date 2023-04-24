import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types/Product';
import connection from './connection';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

async function registerProduct(infoProduct: Product): Promise<Product> {
  const { name, amount } = infoProduct;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (`name`, `amount`) VALUES (?, ?)',
    [name, amount],
  );

  const newProduct : Product = {
    id: result.insertId,
    name,
    amount,
  };

  return newProduct;
}

async function findAllProducts(): Promise<Product[]> {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return result as Product[];
}

export default {
  registerProduct,
  findAllProducts,
};