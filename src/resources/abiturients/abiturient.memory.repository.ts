import { Abiturient, Prisma } from '@prisma/client';
import prisma from '../../prisma';
 
const findAll = async (): Promise<Abiturient[]> => 
  await prisma.abiturient.findMany();

const findById = async (id: string): Promise<Abiturient | null> => 
  await prisma.abiturient.findUnique({ where: { id } });

const create = async (data: Prisma.AbiturientCreateInput): Promise<Abiturient> => 
  await prisma.abiturient.create({ data });

const update = async (id: string, data: Prisma.AbiturientUpdateInput): Promise<Abiturient> => 
  await prisma.abiturient.update({ where: { id }, data });

const remove = async (id: string): Promise<Abiturient> => 
  await prisma.abiturient.delete({ where: { id } });
 
const findWithExams = async (id: string) => 
  await prisma.abiturient.findUnique({
    where: { id },
    include: { exams: true }
  });

export default { findAll, findById, create, update, remove, findWithExams };