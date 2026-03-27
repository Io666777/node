import { Request, Response, NextFunction } from 'express';
import prisma from '../../prisma';

type JwtUser = { id: string; login: string };
type AuthenticatedRequest = Request & { user?: JwtUser };

export const requireUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = (req as AuthenticatedRequest).user;
    if (!user) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const admin = await prisma.admin.findUnique({
      where: { id: user.id },
    });

    if (!admin) {
      res.status(403).json({ message: 'Forbidden' });
      return;
    }

    next();
  } catch (error) {
    console.error('Ошибка в requireUserMiddleware:', error);
    res.status(500).json({ message: 'Internal Server Error during user validation' });
  }
};