import * as abiturientsRepo from './abiturient.memory.repository.js';
import * as examsService from '../exams/exam.service.js';
import Abiturient from './abiturient.model.js';

const getAll = (): Promise<Abiturient[]> => abiturientsRepo.getAll();
const getById = (id: number): Promise<Abiturient | undefined> => abiturientsRepo.getById(id);
const create = (abi: Abiturient): Promise<Abiturient> => abiturientsRepo.create(abi);
const update = (id:number, data:Partial<Abiturient>):Promise<Abiturient|null> => abiturientsRepo.update(id, data);

const remove = async (id:number):Promise<Abiturient| null> => {
  const delAbi = await abiturientsRepo.remove(id);
  if (delAbi) {
    await examsService.removeAbiturient(id);
  }
  return delAbi;
};


const getAbiturientExams = (id:number) Promise<Exam[]> => examsService.getAbiturientExams(id);

export { getAll, getById, create, update, remove, getAbiturientExams };
