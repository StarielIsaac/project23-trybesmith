import { NextFunction, Request, Response } from 'express';
// import Joi from 'joi';

export default function valitateLevel(req: Request, res: Response, next: NextFunction) {
  const { level } = req.body;

  if (typeof level === 'undefined') {
    return res.status(400).json({ message: '"level" is required' });
  }

  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }

  // aqui está o erro
  if (level <= 0) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
}