import * as examsRepo from './exam.memory.repository';
import { Exam } from './exam.model';

const getAll = (): Promise<Exam[]> => examsRepo.getAll();

const getById = (id: string): Promise<Exam | undefined> => examsRepo.getById(id);

const create = (exam: Exam): Promise<Exam> => examsRepo.create(exam);

const update = (id: string, data: Partial<Exam>): Promise<Exam | null> => 
  examsRepo.update(id, data);

const remove = (id: string): Promise<Exam | null> => examsRepo.remove(id);

const getByAbiturientId = (id: string): Promise<Exam[]> => examsRepo.getByAbiturientId(id);

const getByTeacherId = (id: string): Promise<Exam[]> => examsRepo.getByTeacherId(id);

const removeAbiturient = (id: string): Promise<void> => examsRepo.removeAbiturient(id);

const removeTeacher = (id: string): Promise<void> => examsRepo.removeTeacher(id);

export {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAbiturientId,
  getByTeacherId,
  removeAbiturient,
  removeTeacher,
};