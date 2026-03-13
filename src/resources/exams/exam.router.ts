import { Router, Request, Response } from 'express';
import * as examService from './exam.service';

const router = Router();

router
  .route('/')
  .get(async (_req: Request, res: Response) => {
    const exams = await examService.getAll();
    res.json(exams);
  })
  .post(async (req: Request, res: Response) => {
    const newExam = await examService.create(req.body);
    res.status(201).json(newExam);
  });

router
  .route('/:id')
  .get(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const exam = await examService.getById(id!);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    return res.json(exam);
  })
  .put(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const updated = await examService.update(id!, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    return res.json(updated);
  })
  .delete(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const deleted = await examService.remove(id!);
    if (!deleted) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    return res.sendStatus(204);
  });

export default router;