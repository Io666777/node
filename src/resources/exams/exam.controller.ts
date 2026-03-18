import { Request, Response } from 'express';
import examRepo from './exam.memory.repository';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const exams = await examRepo.findAll();
  res.json(exams);
};

const getById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const exam = await examRepo.findById(id);
  
  if (!exam) {
    res.status(404).send('Экзамен не найден');
    return;
  }
  res.json(exam);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const newExam = await examRepo.create(req.body);
  res.status(201).json(newExam);
};

const update = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const updated = await examRepo.update(id, req.body);
  res.json(updated);
};

const remove = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const result = await examRepo.remove(id);
  
  if (!result) {
    res.status(404).send('Exam not found');
    return;
  }
  res.sendStatus(204);
};

export default { getAll, getById, create, update, remove };