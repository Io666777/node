import express from 'express';

import abiRouter from './resources/abiturients/abiturient.router';
import tRouter from './resources/teachers/teacher.router';
import eRouter from './resources/exams/exam.router';

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/abiturients', abiRouter);
app.use('/teachers', tRouter);
app.use('/exams', eRouter);

export default app;
