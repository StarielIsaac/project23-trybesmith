import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../auth/tokenJwt';
import ErrorLaunch from '../utils/errorLaunch';

function validateTokenMidd(req: Request & { user?: number }, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ErrorLaunch('Token not found', 401);
  }

  const token = validateToken(authorization);
  req.user = token;

  next();
}

export default validateTokenMidd;
