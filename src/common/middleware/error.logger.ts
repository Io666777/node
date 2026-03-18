import { Request, Response } from 'express'; 
import logger from '../logger/winston';

const errorHandler = (err: Error, _req: Request, res: Response) => {

  logger.error(`Error: ${err.message}`, { 
    stack: err.stack, 
  });

  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler