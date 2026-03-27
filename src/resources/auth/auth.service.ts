import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthRepository } from './auth.memory.repository';

const authRepository = new AuthRepository();

export class AuthService {
  async login(login: string, password: string) {
    const admin = await authRepository.findAdminByLogin(login);
 
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      throw new Error('Invalid credentials');
    }
 
    const token = jwt.sign(
      { id: admin.id, login: admin.login },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: '24h' }
    );

    return token;
  }

  async createUser(payload: { name: string; login: string; password: string }) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    return authRepository.createAdmin({
      name: payload.name,
      login: payload.login,
      password: hashedPassword,
    });
  }
}