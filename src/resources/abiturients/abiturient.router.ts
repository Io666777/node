import { Router } from 'express';
import abiController from './abiturient.controller';

const router = Router();

router.route('/')
  .get(abiController.getAll)
  .post(abiController.create);

router.route('/:id')
  .get(abiController.getById)
  .put(abiController.update)
  .delete(abiController.remove);

export default router;