import { Router, Request, Response } from 'express';
import * as examService from './exam.service';

import Exam from './exam.model';

const router = Router();

router
  .route('/')
  .get(async (_req: Request, res: Response) => {
    const exam = await examService.getAll();
    res.json(exam);
  })
  .post(async (req: Request, res: Response) => {
    const newExam = await examService.create(req.body);
    res.json(newExam);
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const exam = await examService.getById(req.params.id);
    if(!exam){
      return res.status(404).json({message:'exam not found'})
    }
    return res.json(exam);
  })
  .put(async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const update = await examService.update(id, req.body);
    res.json(update);
  })
  .delete(async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    await examService.remove(id);
    res.sendStatus(204);
  });

router.route('/teacher/:id').get(async (req: Request, res: Response) => {
const teacherId = Number(req.params.id);
  const exams = await examService.getByTeacherId(teacherId);
  res.json(exams);
});

router.route('/abiturient/:id').get(async (req: Request, res: Response) => {
const abiturientId = Number(req.params.id);
  const exams = await examService.getByAbiturientId(abiturientId);
  res.json(exams);
});
export default router;

