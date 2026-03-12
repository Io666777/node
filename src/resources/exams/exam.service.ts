import * as examsRepo from './exam.memory.repository.js';
import Exam from './exam.model';

const getAll = (): Promise<Exam[]> => examsRepo.getAll();
const getById = (id:number):Promise<Exam | undefined> => examsRepo.getById(id);
const create = (exam: Exam):Promise<Exam> => examsRepo.create(exam);
const update = (id:number, data:Partial<Exam>):Promise<Exam | null> => examsRepo.update(id, data);
const remove = (id: number):Promise<Exam | null> => examsRepo.remove(id);

const getByAbiturientId = (id:number):Promise<Exam[] | null> => examsRepo.getByAbiturientId(id);
const getByTeacherId = (id:number):Promise<Exam[] | null>  => examsRepo.getByTeacherId(id);

const removeAbiturient = (id:number):Promise<boolean> => examsRepo.removeAbiturient(id);
const removeTeacher = (id:number):Promise<boolean>  => examsRepo.removeTeacher(id);

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
