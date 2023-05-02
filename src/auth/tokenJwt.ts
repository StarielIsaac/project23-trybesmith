import jwt, { SignOptions } from 'jsonwebtoken';
import { User, Login } from '../types/User';

// Define as opções de configuração do token JWT (tempo o token expira e o algoritmo)
const config : SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

// const secret = process.env.JWT_SECRET || 'default_secret';
// Define a chave secreta para assinar e verificar os tokens
const secret = 'process.env.JWT_SECRET';

// Função para criar um token JWT a partir dos valores de um usuário ou login
const createToken = (values: User | Login) : string => {
  const token = jwt.sign(values, secret, config);
  return token;
};
// Função para validar um token JWT e retornar o ID do usuário associado
const validateToken = (token: string) : number => {
  const verify = jwt.verify(token, secret);

  if (typeof verify !== 'string') return verify.id || 0;

  return 0;
};

export {
  createToken,
  validateToken,
};