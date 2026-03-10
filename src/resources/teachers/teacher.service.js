import * as teachersRepo from './teacher.memory.repository.js';
import * as examsService from '../exams/exam.service.js';

const getAll = () => teachersRepo.getAll();
const getById = (id) => teachersRepo.getById(id);
const create = (teacher) => teachersRepo.create(teacher);
const update = (id, data) => teachersRepo.update(id, data);

const remove = async (id) => {
  const delTea = await teachersRepo.remove(id);
  if (delTea) {
    await examsService.removeTeacher(id);
  }
  return delTea;
};


const getTeacherExams = (id) => examsService.getByTeacherId(id);

export { getAll, getById, create, update, remove, getTeacherExams };
