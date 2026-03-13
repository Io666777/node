import { Router } from 'express';
import examController from './exam.controller';

const router = Router();

router.route('/')
  .get(examController.getAll)
  .post(examController.create);

router.route('/:id')
  .get(examController.getById)
  .put(examController.update)
  .delete(examController.remove);

export default router;