import { ObjLogin } from '../types/User';
import createToken from '../auth/tokenJwt';
import loginModel from '../models/loginModel';
import ErrorLaunch from '../utils/errorLaunch';

async function loginUser(infoUser : ObjLogin): Promise<string> {
  const user = await loginModel.loginUser(infoUser);

  if (!user || user.password !== infoUser.password) {
    throw new ErrorLaunch('Username or password invalid', 401);
  }

  const payload = {
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };

  const token = createToken(payload);
  return token;
}

export default {
  loginUser,
};