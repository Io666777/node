import { Teacher } from './teacher.model';

const TEACHERS: Teacher[] = [];

const getAll = async (): Promise<Teacher[]> => TEACHERS;

const getById = async (id: string): Promise<Teacher | undefined> => 
  TEACHERS.find((tch) => tch.id === id);

const create = async (teacher: Teacher): Promise<Teacher> => {
  TEACHERS.push(teacher);
  return teacher;
};

const update = async (id: string, data: Partial<Teacher>): Promise<Teacher | null> => {
  const index = TEACHERS.findIndex((tch) => tch.id === id);
  if (index !== -1) {
    const updatedTeacher = { ...TEACHERS[index], ...data } as Teacher;
    TEACHERS[index] = updatedTeacher;
    return updatedTeacher;
  }
  return null;
};

const remove = async (id: string): Promise<Teacher | null> => {
  const index = TEACHERS.findIndex((tch) => tch.id === id);
  if (index !== -1) {
    const deleted = TEACHERS.splice(index, 1)[0];
    return deleted || null;
  }
  return null;
};

export { getAll, getById, create, update, remove };