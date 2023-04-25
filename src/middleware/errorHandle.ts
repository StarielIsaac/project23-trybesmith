import { ErrorRequestHandler } from 'express';
import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import ErrorLaunch from '../utils/errorLaunch';

const errorHandler : ErrorRequestHandler = (err : Error, _req, res, _next) => {
  if (err instanceof ErrorLaunch) {
    return res.status(err.code).json({ message: err.message });
  }
  if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  return res.status(500).json({ message: 'internal server error' });
};

export default errorHandler;