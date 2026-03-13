import { Request, Response } from 'express';
import * as examService from './exam.service';

const getAll = async (_req: Request, res: Response) => {
  const exams = await examService.getAll();
  return res.json(exams);
};

const getById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const exam = await examService.getById(id);
  if (!exam) return res.status(404).send('Exam not found');
  return res.json(exam);
};

const create = async (req: Request, res: Response) => {
  const exam = await examService.create(req.body);
  return res.status(201).json(exam);
};

const update = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const exam = await examService.update(id, req.body);
  if (!exam) return res.status(404).send('Exam not found');
  return res.json(exam);
};

const remove = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const exam = await examService.remove(id);
  if (!exam) return res.status(404).send('Exam not found');
  return res.status(204).send('Exam deleted');
};

export default { getAll, getById, create, update, remove };