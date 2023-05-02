import { Request, Response } from 'express';
import userService from '../services/userService';

// Função para criar um novo usuário
async function createUser(req: Request, res: Response) {
  // Obter os valores do corpo da requisição
  const values = req.body;

  // Chamar o serviço de usuário para criar um novo usuário
  const tokenNewUser = await userService.createUser(values);

  // Retornar uma resposta com o token do novo usuário criado
  res.status(201).json({ token: tokenNewUser });
}

export default {
  createUser,
};