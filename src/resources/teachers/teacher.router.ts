import { Router } from 'express';
import tController from './teacher.controller';

const router = Router();
router.get('/', tController.getAll);
router.post('/', tController.create);

router.get('/:id', tController.getById);
router.patch('/:id', tController.update);
router.delete('/:id', tController.remove);

router.get('/:id/exams', tController.getExams);

export default router;