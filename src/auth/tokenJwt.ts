import jwt, { SignOptions } from 'jsonwebtoken';
import { User, Login } from '../types/User';

const config : SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

// const secret = process.env.JWT_SECRET || 'default_secret';
const secret = 'process.env.JWT_SECRET';

const createToken = (values: User | Login) : string => {
  const token = jwt.sign(values, secret, config);
  return token;
};

const validateToken = (token: string) : number => {
  const verify = jwt.verify(token, secret);

  if (typeof verify !== 'string') return verify.id || 0;

  return 0;
};

export {
  createToken,
  validateToken,
};