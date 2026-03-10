import * as examsRepo from './exam.memory.repository.js';

const getAll = () => examsRepo.getAll();
const getById = (id) => examsRepo.getById(id);
const create = (exam) => examsRepo.create(exam);
const update = (id, data) => examsRepo.update(id, data);
const remove = (id) => examsRepo.remove(id);

const getByAbiturientId = (id) => examsRepo.getByAbiturientId(id);
const getByTeacherId = (id) => examsRepo.getByTeacherId(id);

const removeAbiturient = (id) => examsRepo.removeAbiturient(id);
const removeTeacher = (id) => examsRepo.removeTeacher(id);

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
