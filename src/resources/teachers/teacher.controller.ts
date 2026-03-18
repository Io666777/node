import { Request, Response } from 'express';
import tService from './teacher.service';

const getAll = async (_req: Request, res: Response): Promise<void> => {
  const teachers = await tService.getAll();
  res.json(teachers);
};

const getById = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string; 
  const teacher = await tService.getById(id);

  if (!teacher) {
    res.status(404).send('Teacher not found');
    return; 
  }
  res.json(teacher);
};

const create = async (req: Request, res: Response): Promise<void> => {
  const newTeacher = await tService.create(req.body);
  res.status(201).json(newTeacher);
};

const update = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const updated = await tService.update(id, req.body);
  res.json(updated);
};

const remove = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const result = await tService.remove(id);

  if (!result) {
    res.status(404).send('Teacher not found');
    return;
  }
  res.sendStatus(204);
};

const getExams = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id as string;
  const exams = await tService.getTeacherExams(id);
  res.json(exams);
};

export default { getAll, getById, create, update, remove, getExams };