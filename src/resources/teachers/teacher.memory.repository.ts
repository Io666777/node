import {Teacher} from '@prisma/client'
import prisma from '../../prisma'

const getAll = async (): Promise<Teacher[]> => 
  await prisma.teacher.findMany();

const getById = async (id: string): Promise<Teacher | null> => 
  await prisma.teacher.findUnique({ where: { id } });


const create = async (teacher: Teacher): Promise<Teacher> => 
  await prisma.teacher.create({ data: teacher });

const update = async (id: string, data: Partial<Teacher>): Promise<Teacher> => 
  await prisma.teacher.update({
    where: { id },
    data,
  });

const remove = async (id: string): Promise<Teacher | null> => {
  try {
    return await prisma.teacher.delete({ where: { id } });
  } catch {
    return null;
  }
};

export default { getAll, getById, create, update, remove };