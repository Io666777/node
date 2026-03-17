import { Abiturient, Exam } from '@prisma/client';
import prisma from '../../prisma';

const getAll = async (): Promise<Abiturient[]> => 
  await prisma.abiturient.findMany();

const getById = async (id: string): Promise<Abiturient | null> => 
  await prisma.abiturient.findUnique({ where: { id } });

const create = async (data: any): Promise<Abiturient> => 
  await prisma.abiturient.create({ 
    data: {
      ...data,
      numCertificate: Number(data.numCertificate)  
    } 
  });

const update = async (id: string, data: any): Promise<Abiturient> => 
  await prisma.abiturient.update({
    where: { id },
    data: {
      ...data,
      ...(data.numCertificate && { numCertificate: Number(data.numCertificate) })
    },
  });

const remove = async (id: string): Promise<Abiturient | null> => {
  try {
    return await prisma.abiturient.delete({ where: { id } });
  } catch {
    return null;
  }
};

const getAbiturientExams = async (abiturientId: string): Promise<Exam[]> => {
  const result = await prisma.abiturient.findUnique({
    where: { id: abiturientId },
    include: { exams: true },
  });
  return result?.exams || [];
};

export default { getAll, getById, create, update, remove, getAbiturientExams };