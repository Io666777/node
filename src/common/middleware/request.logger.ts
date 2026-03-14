import { Request, Response, NextFunction } from 'express';
import logger from '../logger/winston';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url, query, body } = req;

   logger.info(`Req: ${method} ${url}`, { query, body });
   
  res.on('finish',()=>{
    logger.info(`Res: ${method} ${url} - status: ${res.statusCode}`);
  })
  next();
};

export default requestLogger;