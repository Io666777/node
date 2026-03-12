import { Router, request, response } from 'express';
import * as abiService from './abiturient.service';

import Abiturient from './abiturient.model';

const router = Router();

router
  .route('/')
  .get(async (_req: Request, res: Response) => {
    const abi = await abiService.getAll();
    res.json(abi);
  })
  .post(async (req: Request, res: Response) => {
    const newAbi = await abiService.create(req.body);
    res.json(newAbi);
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const abi = await abiService.getById(req.params.id);
    if(!abi){
      return res.status(404).json({message:'abi not found'})
    }
    return res.json(abi);
  })
  .put(async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const update = await abiService.update(id, req.body);
    res.json(update);
  })
  .delete(async (req: Request, res: Response) => {
    const {id} = req.params;
    await abiService.remove(Number(id));
    res.sendStatus(204);
  });

router.route('/:id/exams').get(async (req: Request, res: Response) => {
const id = Number(req.params.id);
  const exams = await abiService.getAbiturientExams(id);
  res.json(exams);
});
export default router;
