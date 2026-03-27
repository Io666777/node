import 'dotenv/config';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import prisma from '../src/prisma';

async function main() {
const hashedPassword = await bcrypt.hash('admin', 10);
const adminData: Prisma.AdminCreateInput[] = [
    {
      name: 'LEGOO',
      login: 'LEGOO',
      password: hashedPassword,
    },
    {
      name: 'Administrator',
      login: 'admin',
      password: hashedPassword,
    },
];
for (const ad of adminData) {
    await prisma.admin.upsert({
      where: { login: ad.login },
      update: {},
      create: ad,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Ошибка при сидировании:', e);
    await prisma.$disconnect();
    process.exit(1);
  });