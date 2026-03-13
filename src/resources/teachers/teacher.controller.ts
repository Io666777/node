import { Request, Response } from 'express';
import * as tService from './teacher.service';

const getAll = async (_req: Request, res: Response) => {
  const teachers = await tService.getAll();
  return res.json(teachers); // Если в модели есть toResponse, используй его здесь
};

const getById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const teacher = await tService.getById(id);
  if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
  return res.json(teacher);
};

const create = async (req: Request, res: Response) => {
  const newTeacher = await tService.create(req.body);
  return res.status(201).json(newTeacher);
};

const update = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const updated = await tService.update(id, req.body);
  if (!updated) return res.status(404).json({ message: 'Teacher not found' });
  return res.json(updated);
};

const remove = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const removed = await tService.remove(id);
  if (!removed) return res.status(404).json({ message: 'Teacher not found' });
  return res.sendStatus(204);
};

const getTeacherExams = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const exams = await tService.getTeacherExams(id);
  return res.json(exams);
};

export default { getAll, getById, create, update, remove, getTeacherExams };