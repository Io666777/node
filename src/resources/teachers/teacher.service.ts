import * as teachersRepo from './teacher.memory.repository.js';
import * as examsService from '../exams/exam.service.js';
import Teacher from './teacher.model.js';
import Exam from 'resources/exams/exam.model.js';

const getAll = ():Promise<Teacher[]> => teachersRepo.getAll();
const getById = (id:number):Promise<Teacher | undefined> => teachersRepo.getById(id);
const create = (teacher: Teacher):Promise<Teacher> => teachersRepo.create(teacher);
const update = (id:number, data:Partial<Teacher>):Promise<Teacher | null> => teachersRepo.update(id, data);

const remove = async (id: number):Promise<Teacher | null> => {
  const delTea = await teachersRepo.remove(id);
  if (delTea) {
    await examsService.removeTeacher(id);
  }
  return delTea;
};


const getTeacherExams = async (id:number):Promise<Exam[] | null> => examsService.getByTeacherId(id);

export { getAll, getById, create, update, remove, getTeacherExams };
