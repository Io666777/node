import Teacher from "./teacher.model";

const TEACHERS: Teacher[]=[];

const getAll = async ():Promise<Teacher[]> => TEACHERS;

const getById = async (id:number):Promise<Teacher | undefined> => TEACHERS.find((tch) => tch.id === id);

const create = async (teacher:Teacher):Promise<Teacher> => {
  TEACHERS.push(teacher);
  return teacher;
};

const update = async (id:number, data:Partial<Teacher>):Promise<Teacher| null> => {
  const i = TEACHERS.findIndex((tch) => tch.id === id);
  if (i !== -1) {
    const uTch = { ...TEACHERS[i], ...data } as Teacher
    TEACHERS[i]=uTch
    return uTch
  }
  return null;
};

const remove = async (id:number):Promise<Teacher |null> => {
  const i = TEACHERS.findIndex((tch) => tch.id === id);
  if (i !== -1) {
    const del = TEACHERS.splice(i, 1)[0];
    return del || null
  }
  return null;
};

export { getAll, getById, create, update, remove };
