import { Request, Response } from 'express';
import loginService from '../services/loginService';

// Função para lidar com o login do usuário
async function loginUser(req: Request, res: Response) {
  const values = req.body;

  // Chamar o serviço de login para autenticar o usuário e gerar um token JWT
  const userToken = await loginService.loginUser(values);

  // Retornar uma resposta com o token JWT gerado
  return res.status(200).json({ token: userToken });
}

export default {
  loginUser,
};