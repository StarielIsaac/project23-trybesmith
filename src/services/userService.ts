import { User } from '../types/User';
import userModel from '../models/userModel';

// função para criar um novo usuario
async function createUser(infoUser : User): Promise<string> {
  // Chama a função createUser do modelo de usuário, passando as informações do usuário como parâmetro
  const token = await userModel.createUser(infoUser);
  // Retorna o token gerado pela função createUser do modelo de usuário
  return token;
}

export default {
  createUser,
};