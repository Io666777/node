import app from './app';

import { PORT } from './common/config';
import logger from './common/logger/winston'

process.on('uncaughtException', (error: Error) => {
    logger.error(`Uncaught exception: ${error.message}`, {stack: error.stack});
});

process.on('unhandledRejection', (reason: any) => {
  logger.error(`Unhandled Rejection: ${reason.message || reason}`);
});

app.listen(PORT, () => console.log(`App is running on localhost:${PORT}`));