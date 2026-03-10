import * as abiturientsRepo from './abiturient.memory.repository.js';
import * as examsService from '../exams/exam.service.js';

const getAll = () => abiturientsRepo.getAll();
const getById = (id) => abiturientsRepo.getById(id);
const create = (abi) => abiturientsRepo.create(abi);
const update = (id, data) => abiturientsRepo.update(id, data);

const remove = async (id) => {
  const delAbi = await abiturientsRepo.remove(id);
  if (delAbi) {
    await examsService.removeAbiturient(id);
  }
  return delAbi;
};


const getAbiturientExams = (id) => examsService.getAbiturientExams(id);

export { getAll, getById, create, update, remove, getAbiturientExams };
