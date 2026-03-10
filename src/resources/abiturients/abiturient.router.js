import { Router } from 'express';

// import Abiturient from './abiturient.model.js';
import * as abiService from './abiturient.service.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const abi = await abiService.getAll();
    res.json(abi);
  })
  .post(async (req, res) => {
    const newAbi = await abiService.create(req.body);
    res.json(newAbi);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const abi = await abiService.getById(req.params.id);
    res.json(abi);
  })
  .put(async (req, res) => {
    const update = await abiService.update(req.params.id, req.body);
    res.json(update);
  })
  .delete(async (req, res) => {
    await abiService.remove(req.params.id);
    res.sendStatus(204);
  });

router.route('/:id:exams').get(async (req, res) => {
  const exams = await abiService.getAbiturientExams(req.params.id);
  res.json(exams);
});
export default router;
