import { Exam } from '@prisma/client';
import prisma from '../../prisma';

const findAll = async (): Promise<Exam[]> => 
  await prisma.exam.findMany({
    include: { teacher: true, abiturient: true }
  });

const findById = async (id: string): Promise<Exam | null> => 
  await prisma.exam.findUnique({ 
    where: { id },
    include: { teacher: true, abiturient: true }
  });

const create = async (data: any): Promise<Exam> => {
  // Собираем объект вручную
  const createData = {
    subject: data.subject,
    score: Number(data.score),
    date: new Date(data.date),
    teacherId: data.teacherId,
    abiturientId: data.abiturientId
  };

  // КОСТЫЛЬ: приводим к any, чтобы TS не сравнивал типы дат и строк
  return await prisma.exam.create({
    data: createData as any
  });
};

const update = async (id: string, data: any): Promise<Exam> => {
  const updateData: any = {};

  if (data.subject) updateData.subject = data.subject;
  if (data.score) updateData.score = Number(data.score);
  if (data.date) updateData.date = new Date(data.date);
  if (data.teacherId) updateData.teacherId = data.teacherId;
  if (data.abiturientId) updateData.abiturientId = data.abiturientId;

  // КОСТЫЛЬ: снова используем as any
  return await prisma.exam.update({
    where: { id },
    data: updateData as any
  });
};

const remove = async (id: string): Promise<Exam | null> => {
  try {
    return await prisma.exam.delete({ where: { id } });
  } catch {
    return null;
  }
};

export default { findAll, findById, create, update, remove };