import { Request, Response } from 'express';
import aService from './abiturient.service';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const list = await aService.getAll();
  res.json(list);
};

const getById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const item = await aService.getById(id);
  
  if (!item) {
    res.status(404).send('Abiturient not found');
    return;
  }
  res.json(item);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const newItem = await aService.create(req.body);
  res.status(201).json(newItem);
};

const update = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const updated = await aService.update(id, req.body);
  res.json(updated);
};

const remove = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const result = await aService.remove(id);
  
  if (!result) {
    res.status(404).send('Abiturient not found');
    return;
  }
  res.sendStatus(204);
};

const getExams = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const exams = await aService.getAbiturientExams(id);
  res.json(exams);
};

export default { getAll, getById, create, update, remove, getExams };