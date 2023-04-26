import { ResultSetHeader } from 'mysql2';
import { User } from '../types/User';
import connection from './connection';
import { createToken } from '../auth/tokenJwt';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

async function createUser(infoUser: User): Promise<string> {
  const { username, vocation, level, password } = infoUser;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(`username`, `vocation`, `level`, `password`) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const payload = {
    id: result.insertId,
    username,
    vocation,
    level,
  };

  const token = createToken(payload);

  return token;
}

export default {
  createUser,
};