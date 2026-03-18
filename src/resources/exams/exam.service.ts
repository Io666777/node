import { Exam } from '@prisma/client';
import examRepo from './exam.memory.repository';

const getAll = async (): Promise<Exam[]> => {
  return await examRepo.findAll();
};

const getById = async (id: string): Promise<Exam | null> => {
  return await examRepo.findById(id);
};

const create = async (data: any): Promise<Exam> => {
  return await examRepo.create(data);
};

const update = async (id: string, data: any): Promise<Exam> => {
  return await examRepo.update(id, data);
};

const remove = async (id: string): Promise<Exam | null> => {
  return await examRepo.remove(id);
};

export default { getAll, getById, create, update, remove };