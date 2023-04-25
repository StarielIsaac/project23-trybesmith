import jwt, { SignOptions } from 'jsonwebtoken';
import { User, Login } from '../types/User';

const config : SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

// const secret = process.env.JWT_SECRET || 'default_secret';
const secret = 'process.env.JWT_SECRET';

export default function createToken(values: User | Login) : string {
  const token = jwt.sign(values, secret, config);
  return token;
}

// export default function validateToken () {
//   jwt.verify()
// }