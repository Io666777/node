import { Router } from 'express';
import teacherController from './teacher.controller';

const router = Router();

router.route('/')
  .get(teacherController.getAll)
  .post(teacherController.create);

router.route('/:id')
  .get(teacherController.getById)
  .put(teacherController.update)
  .delete(teacherController.remove);

router.get('/:id/exams', teacherController.getTeacherExams);

export default router;