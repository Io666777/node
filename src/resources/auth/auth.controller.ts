import { Request, Response } from 'express';
import  {AuthService}  from './auth.service';

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { login, password } = req.body;
      const token = await authService.login(login, password);
      
      res.json({ token });
      return;
    } catch (error) {
      res.status(401).json({ message: 'not autentificate' });
      return;
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, login, password } = req.body;
      const created = await authService.createUser({ name, login, password });
      res.status(201).json(created);
      return;
    } catch (error) {
      res.status(400).json({ message: 'Unable to create user' });
      return;
    }
  }
}