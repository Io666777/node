import { Router, Request, Response } from 'express';
import * as tService from './teacher.service';

import Teacher from './teacher.model';

const router = Router();

router
  .route('/')
  .get(async (_req: Request, res:Response) => {
    const t = await tService.getAll();
    res.json(t);
  })
  .post(async (req: Request, res:Response) => {
    const newT = await tService.create(req.body);
    res.json(newT);
  }); 

router
  .route('/:id')
  .get(async (req: Request, res:Response) => {
    const id = Number(req.params.id)
    const t = await tService.getById(req.params.id);
    if(!t){
      return res.status(404).json({message:'teacher not found'})
    }
    res.json(t);
  }) 
  .put(async (req: Request, res:Response) => {
    const id = Number(req.params.id)
    const updated = await tService.update(id, req.body);
    res.json(updated);  
  })
  .delete(async (req: Request, res:Response) => {
    const id = Number(req.params.id)
    const removed = await tService.remove(id);
    res.json(removed);  
  });
 
router.route('/:id/exams').get(async (req: Request, res:Response) => {
  const id = Number(req.params.id)
  const exams = await tService.getTeacherExams( id);
  res.json(exams);  
});

export default router;
