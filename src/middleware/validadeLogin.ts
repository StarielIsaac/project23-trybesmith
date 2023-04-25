import { Request, Response, NextFunction } from 'express';
import ErrorLaunch from '../utils/errorLaunch';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;

  if (!username || typeof username !== 'string') {
    throw new ErrorLaunch('"username" is required', 400);
  }

  if (!password || typeof password !== 'string') {
    throw new ErrorLaunch('"password" is required', 400);
  }
  return next();
};

export default validateLogin;