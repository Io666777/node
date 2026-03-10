const TEACHERS = [];

const getAll = async () => TEACHERS;

const getById = async (id) => TEACHERS.find((tch) => tch.id === id);

const create = async (teacher) => {
  TEACHERS.push(teacher);
  return teacher;
};

const update = async (id, data) => {
  const i = TEACHERS.findIndex((tch) => tch.id === id);
  if (i !== -1) {
    TEACHERS[i] = { ...TEACHERS[i], ...data };
    return TEACHERS[i];
  }
  return null;
};

const remove = async (id) => {
  const i = TEACHERS.findIndex((tch) => tch.id === id);
  if (i !== -1) {
    return TEACHERS.splice(i, 1)[0];
  }
  return null;
};

export { getAll, getById, create, update, remove };
