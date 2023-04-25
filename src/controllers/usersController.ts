import { Request, Response } from 'express';
import userService from '../services/userService';

async function createUser(req: Request, res: Response) {
  const values = req.body;
  const tokenNewUser = await userService.createUser(values);
  res.status(201).json({ token: tokenNewUser });
}

export default {
  createUser,
};