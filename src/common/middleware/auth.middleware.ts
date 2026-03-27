import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

type JwtUser = { id: string; login: string };
type AuthenticatedRequest = Request & { user?: JwtUser };

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
 
  const token = authHeader.slice('Bearer '.length).trim();
  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const secret = process.env.JWT_SECRET_KEY;
  if (!secret) {
    res.status(500).json({ message: 'Internal Server Error' });
    return;
  }

  try {
    const decoded = jwt.verify(token, secret);

    if (typeof decoded === 'string' || !decoded || typeof decoded !== 'object') {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    const payload = decoded as { id?: unknown; login?: unknown };
    if (typeof payload.id !== 'string' || typeof payload.login !== 'string') {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }

    (req as AuthenticatedRequest).user = { id: payload.id, login: payload.login };
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
    return;
  }
};