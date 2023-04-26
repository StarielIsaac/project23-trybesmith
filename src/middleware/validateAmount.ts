import { NextFunction, Request, Response } from 'express';
// import Joi from 'joi';

export default function valitateAmount(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  if (amount.length < 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
}
