import { RowDataPacket } from 'mysql2';
// import ErrorLaunch from '../utils/errorLaunch';
import { ObjLogin, User } from '../types/User';
import connection from './connection';

// select => RowDataPacket[]
// update => OkPacket
// delete => OkPacket
// insert => ResultSetHeader

async function loginUser(infoUser: ObjLogin): Promise<User | undefined> {
  const { username } = infoUser;

  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  
  return result as User | undefined;
}

export default {
  loginUser,
};