const EXAMS = [];

const getAll = async () => EXAMS;

const getById = async (id) => EXAMS.find((exam) => exam.id === id);

const create = async (exam) => {
  EXAMS.push(exam);
  return exam;
};

const update = async (id, data) => {
  const i = EXAMS.findIndex((exam) => exam.id === id);
  if (i !== -1) {
    EXAMS[i] = { ...EXAMS[i], ...data };
    return EXAMS[i];
  }
  return null;
};

const remove = async (id) => {
  const i = EXAMS.findIndex((exam) => exam.id === id);
  if (i !== -1) {
    return EXAMS.splice(i, 1)[0];
  }
  return null;
};

const getByTeacherId = async (id) => EXAMS.filter((exam) => exam.teacherId === id);
const getByAbiturientId = async (id) => EXAMS.filter((exam) => exam.abiturientId === id);

const removeTeacher = async (teacherId) => {
  EXAMS.forEach((exam, index) => {
    if (exam.teacherId === teacherId) {
      EXAMS[index] = { ...exam, teacherId: null };
    }
  });
  return true;
};
const removeAbiturient = async (abiturientId) => {
  EXAMS.forEach((exam, index) => {
    if (exam.abiturientId === abiturientId) {
      EXAMS[index] = { ...exam, abiturientId: null };
    }
  });
  return true;
};

export {
  getAll,
  getById,
  create,
  update,
  remove,
  removeTeacher,
  removeAbiturient,
  getByTeacherId,
  getByAbiturientId,
};
