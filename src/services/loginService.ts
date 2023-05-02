import { ObjLogin } from '../types/User';
import { createToken } from '../auth/tokenJwt';
import loginModel from '../models/loginModel';
import ErrorLaunch from '../utils/errorLaunch';

async function loginUser(infoUser : ObjLogin): Promise<string> {
  // Busca usuário com as credenciais informadas
  const user = await loginModel.loginUser(infoUser);

  // Verifica se usuário não foi encontrado ou a senha não bate
  if (!user || user.password !== infoUser.password) {
    // Caso haja erro, lança uma exceção personalizada com status code 401
    throw new ErrorLaunch('Username or password invalid', 401);
  }
  // Cria um payload com as informações do usuário
  const payload = {
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
  };
  // Cria um token JWT com o payload e retorna
  const token = createToken(payload);
  return token;
}

export default {
  loginUser,
};