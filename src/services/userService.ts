import { User } from '../types/User';
import userModel from '../models/userModel';

async function createUser(infoUser : User): Promise<string> {
  const user = await userModel.createUser(infoUser);
  return user;
}

export default {
  createUser,
};