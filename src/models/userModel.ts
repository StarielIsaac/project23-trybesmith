import { ResultSetHeader } from 'mysql2';
import { User } from '../types/User';
import connection from './connection';
import { createToken } from '../auth/tokenJwt';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

// Função assíncrona para criar um novo usuário e retornar um token JWT
async function createUser(infoUser: User): Promise<string> {
  const { username, vocation, level, password } = infoUser;

  // Executa uma query SQL de inserção na tabela "users" com as informações do novo usuário
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(`username`, `vocation`, `level`, `password`) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  // Cria um payload com as informações do usuário recém-criado
  const payload = {
    id: result.insertId,
    username,
    vocation,
    level,
  };
  // Cria um token JWT com o payload
  const token = createToken(payload);

  // Retorna o token
  return token;
}

// Exporta a função "createUser"
export default {
  createUser,
};