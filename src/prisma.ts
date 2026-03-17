import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  // @ts-ignore - игнорируем проверку типов для этого костыля
  __internal: {
    engine: {
      endpoint: undefined,
      type: 'library' // Явно заставляем использовать библиотечный движок
    }
  }
});

export default prisma;