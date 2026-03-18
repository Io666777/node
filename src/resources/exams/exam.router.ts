import { Router } from 'express';
import examController from './exam.controller';

const router = Router();

router.get('/', examController.getAll);
router.post('/', examController.create);
router.get('/:id', examController.getById);
router.patch('/:id', examController.update);
router.delete('/:id', examController.remove);

export default router;