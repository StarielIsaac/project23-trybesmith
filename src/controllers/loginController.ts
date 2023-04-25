import { Request, Response } from 'express';
import loginService from '../services/loginService';

async function loginUser(req: Request, res: Response) {
  const values = req.body;
  const userToken = await loginService.loginUser(values);
  return res.status(200).json({ token: userToken });
}

export default {
  loginUser,
};