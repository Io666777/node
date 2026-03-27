import prisma from '../../prisma';

export class AuthRepository {
  async findAdminByLogin(login: string) {
    return prisma.admin.findUnique({
      where: { login },
    });
  }

  async createAdmin(payload: { name: string; login: string; password: string }) {
    return prisma.admin.create({
      data: payload,
    });
  }
}