import express from 'express';

import userRouter from './resources/users/user.router.js';
import abiRouter from './resources/abiturients/abiturient.router.js';
import tRouter from './resources/teachers/teacher.router.js';
import eRouter from './resources/exams/exam.router.js';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/abiturients', abiRouter);
app.use('/teachers', tRouter);
app.use('/exams', eRouter);

export default app;
