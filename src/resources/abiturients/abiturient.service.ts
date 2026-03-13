import * as abiturientsRepo from './abiturient.memory.repository';
import * as examsService from '../exams/exam.service';
import { Abiturient } from './abiturient.model';
import { Exam } from '../exams/exam.model';

const getAll = (): Promise<Abiturient[]> => abiturientsRepo.getAll();

const getById = (id: string): Promise<Abiturient | undefined> => abiturientsRepo.getById(id);

const create = (abi: Abiturient): Promise<Abiturient> => abiturientsRepo.create(abi);

const update = (id: string, data: Partial<Abiturient>): Promise<Abiturient | null> => 
  abiturientsRepo.update(id, data);

const remove = async (id: string): Promise<Abiturient | null> => {
  const delAbi = await abiturientsRepo.remove(id);
  if (delAbi) {
       await examsService.removeAbiturient(id);
  }
  return delAbi;
};

const getAbiturientExams = (id: string): Promise<Exam[]> => 
  examsService.getByAbiturientId(id);

export { getAll, getById, create, update, remove, getAbiturientExams };