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
  return await prisma.exam.create({
    data: {
      subject: String(data.subject),
      score: Number(data.score) || 0,
      date: String(data.date || ""), 
      teacherId: data.teacherId,
      abiturientId: data.abiturientId
    }
  });
};

const update = async (id: string, data: any): Promise<Exam> => {
  const updateData: any = {};

  if (data.subject) updateData.subject = String(data.subject);
  if (data.score !== undefined) updateData.score = Number(data.score);
  if (data.date !== undefined) updateData.date = String(data.date);
  if (data.teacherId) updateData.teacherId = data.teacherId;
  if (data.abiturientId) updateData.abiturientId = data.abiturientId;

  return await prisma.exam.update({
    where: { id },
    data: updateData
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