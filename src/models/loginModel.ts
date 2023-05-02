import { RowDataPacket } from 'mysql2';
import { ObjLogin, User } from '../types/User';
import connection from './connection';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

// Função que busca e retorna um usuário com base em seu nome de usuário e senha
async function loginUser(infoUser: ObjLogin): Promise<User | undefined> {
  const { username } = infoUser;

  // Executa uma query que busca um usuário pelo nome de usuário
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  // Retorna o usuário encontrado, se existir
  return result as User | undefined;
}

// Exporta a função loginUser
export default {
  loginUser,
};