import { Router } from 'express';
import * as eService from './exam.service.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const e = await eService.getAll();
    res.json(e);
  })
  .post(async (req, res) => {
    const newT = await eService.create(req.body);
    res.json(newT);
  });
router
  .route('/:id')
  .get(async (req, res) => {
    const e = await eService.getById(req.params.id);
    res.json(e);
  })
  .put(async (req, res) => {
    const updated = await eService.update(req.params.id, req.body);
    res.json(updated);
  })
  .delete(async (req, res) => {
    await eService.remove(req.params.id);
    res.sendStatus(204);
  });
router.route('/teacher/:id').get(async (req, res) => {
  const exams = await eService.getByTeacherId(req.params.id);
  res.json(exams);
});
export default router;
