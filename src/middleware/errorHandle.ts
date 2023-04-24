import { ErrorRequestHandler } from 'express';

import ErrorLaunch from '../utils/errorLaunch';
// const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

const errorHandler : ErrorRequestHandler = (err : unknown, req, res, _next) => {
  if (err instanceof ErrorLaunch) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: 'internal server error' });
};

export default errorHandler;