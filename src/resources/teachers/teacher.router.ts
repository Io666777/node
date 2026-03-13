import { Router, Request, Response } from 'express';
import * as tService from './teacher.service';

const router = Router();

router
  .route('/')
  .get(async (_req: Request, res: Response) => {
    const teachers = await tService.getAll();
    res.json(teachers);
  })
  .post(async (req: Request, res: Response) => {
    const newTeacher = await tService.create(req.body);
    res.status(201).json(newTeacher);
  });

router
  .route('/:id')
  .get(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const teacher = await tService.getById(id!);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    return res.json(teacher);
  })
  .put(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const updated = await tService.update(id!, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    return res.json(updated);
  })
  .delete(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const removed = await tService.remove(id!);
    if (!removed) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    return res.sendStatus(204);
  });

router.get('/:id/exams', async (req: Request<{id:string}>, res: Response) => {
  const { id } = req.params;
  const exams = await tService.getTeacherExams(id!);
  res.json(exams);
});

export default router;