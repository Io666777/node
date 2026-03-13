import * as teachersRepo from './teacher.memory.repository';
import * as examsService from '../exams/exam.service';
import { Teacher } from './teacher.model';
import { Exam } from '../exams/exam.model';

const getAll = (): Promise<Teacher[]> => teachersRepo.getAll();

const getById = (id: string): Promise<Teacher | undefined> => teachersRepo.getById(id);

const create = (teacher: Teacher): Promise<Teacher> => teachersRepo.create(teacher);

const update = (id: string, data: Partial<Teacher>): Promise<Teacher | null> => 
  teachersRepo.update(id, data);

const remove = async (id: string): Promise<Teacher | null> => {
  const deletedTeacher = await teachersRepo.remove(id);
  if (deletedTeacher) {
    await examsService.removeTeacher(id);
  }
  return deletedTeacher;
};

const getTeacherExams = async (id: string): Promise<Exam[]> => 
  examsService.getByTeacherId(id);

export { getAll, getById, create, update, remove, getTeacherExams };