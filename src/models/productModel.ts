import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../types/Product';
import connection from './connection';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

// Função que registra um novo produto no banco de dados
async function registerProduct(infoProduct: Product): Promise<Product> {
  const { name, amount } = infoProduct;

  // Executa a query para inserir um novo produto na tabela "products"
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (`name`, `amount`) VALUES (?, ?)',
    [name, amount],
  );

  // Cria um novo objeto Product com o ID gerado pela inserção e os dados recebidos
  const newProduct : Product = {
    id: result.insertId,
    name,
    amount,
  };

  // Retorna o novo produto criado
  return newProduct;
}

// Função que retorna uma lista com todos os produtos cadastrados no banco de dados
async function findAllProducts(): Promise<Product[]> {
  // Executa a query para buscar todos os produtos cadastrados na tabela "products"
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  // retorna todos os produtos
  return result as Product[];
}

// Exporta as funções registerProduct e findAllProducts
export default {
  registerProduct,
  findAllProducts,
};