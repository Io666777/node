import { Router, Request, Response } from 'express';
import * as abiService from './abiturient.service';

const router = Router();

router
  .route('/')
  .get(async (_req: Request, res: Response) => {
    const abiturients = await abiService.getAll();
    res.json(abiturients);
  })
  .post(async (req: Request, res: Response) => {
    const newAbi = await abiService.create(req.body);
    res.status(201).json(newAbi);
  });

router
  .route('/:id')
  .get(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params; 
    const abi = await abiService.getById(id!);
    if (!abi) {
      return res.status(404).json({ message: 'Abiturient not found' });
    }
    return res.json(abi);
  })
  .put(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const updatedAbi = await abiService.update(id!, req.body);
    if (!updatedAbi) {
      return res.status(404).json({ message: 'Abiturient not found' });
    }
    return res.json(updatedAbi);
  })
  .delete(async (req: Request<{id:string}>, res: Response) => {
    const { id } = req.params;
    const deletedAbi = await abiService.remove(id!);
    if (!deletedAbi) {
      return res.status(404).json({ message: 'Abiturient not found' });
    }
    return res.sendStatus(204);
  });

export default router;