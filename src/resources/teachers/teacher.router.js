import { Router } from 'express';
import * as tService from './teacher.service.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const t = await tService.getAll();
    res.json(t);
  })
  .post(async (req, res) => {
    // Исправлено: теперь тут фигурная скобка {
    const newT = await tService.create(req.body);
    res.json(newT);
  }); // Исправлено: тут закрывающая фигурная скобка }

router
  .route('/:id')
  .get(async (req, res) => {
    const t = await tService.getById(req.params.id);
    res.json(t);
  }) // Важно: убедись, что закрыл GET перед началом PUT
  .put(async (req, res) => {
    const updated = await tService.update(req.params.id, req.body);
    res.json(updated); // Добавлен ответ
  })
  .delete(async (req, res) => {
    const removed = await tService.remove(req.params.id);
    res.json(removed); // Добавлен ответ
  });

// Исправлен путь на /:id/exams
router.route('/:id/exams').get(async (req, res) => {
  const exams = await tService.getTeacherExams(req.params.id);
  res.json(exams); // Добавлен ответ
});

export default router;
