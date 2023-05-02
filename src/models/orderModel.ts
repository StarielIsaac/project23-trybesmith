import { RowDataPacket, ResultSetHeader } from 'mysql2';

// Importa a função renameUserId que será usada posteriormente,
// para renomear o campo `user_id` para `userId`
import renameUserId from '../utils/renameUserId';
// Importa a conexão com o banco de dados
import connection from './connection';
// Importa os tipos utilizados para definir o formato de dados esperado
import { OrderWithIdAssociates, CreateNewOrder } from '../types/Order';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

// Função responsável por buscar todas as ordens no banco de dados e retorná-las
// com o formato esperado, contendo os dados do usuário e dos produtos associados
async function findAllOrders(): Promise <OrderWithIdAssociates[]> {
  // Executa a query SQL que busca todas as ordens e os produtos associados a elas
  const [result] = await connection.execute<RowDataPacket[]>(
    ` 
     SELECT o.id, o.user_id, JSON_ARRAYAGG(p.id) AS productsIds
     FROM Trybesmith.orders AS o
     JOIN Trybesmith.products AS p ON p.order_id = o.id
     GROUP BY o.id;
    `,
  );
  // Renomeia o campo `user_id` para `userId` em cada objeto retornado na resposta
  const newResult = renameUserId(result);
  // Retorna a resposta que contém as informações de usuário e os ids associados a cada ordem
  return newResult as OrderWithIdAssociates[];
}

// Função responsável por criar uma nova ordem no banco de dados com o usuário
// passado por parâmetro e os ids dos produtos associados à ordem
async function createOrder(order: CreateNewOrder, id: number): Promise <OrderWithIdAssociates> {
  // Extrai os ids dos produtos da ordem passada por parâmetro
  const { productsIds } = order;

  // Insere a nova ordem no banco de dados com o id do usuário passado por parâmetro
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.orders (user_id) VALUES (?)`, [id]);

  // Atualiza a tabela de produtos para associar os ids dos produtos passados por
  // parâmetro à nova ordem criada
  await Promise.all(productsIds.map((product) => (
    connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [insertId, product],
    ))));

  // Cria um novo objeto com as informações da ordem criada e retorna-o
  const newOrder = {
    userId: id,
    productsIds,
  } as OrderWithIdAssociates;

  return newOrder;
}

// Exporta as funções `findAllOrders` e `createOrder`
export default {
  findAllOrders,
  createOrder,
};