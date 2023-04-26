import { Request, Response, NextFunction } from 'express';
import ErrorLaunch from '../utils/errorLaunch';

function validateProducts(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;

  if (!productsIds) {
    throw new ErrorLaunch('"productsIds" is required', 400);
  }

  if (!Array.isArray(productsIds)) {
    throw new ErrorLaunch('"productsIds" must be an array', 422);
  }

  if (productsIds.length < 1) {
    throw new ErrorLaunch('"productsIds" must include only numbers', 422);
  }

  next();
}

export default validateProducts;
