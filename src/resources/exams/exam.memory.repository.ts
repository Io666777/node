import Exam from "./exam.model"

const EXAMS : Exam[]=[];

const getAll = async ():Promise<Exam[]> => EXAMS;

const getById = async (id:number):Promise<Exam | undefined> => EXAMS.find((exam) => exam.id === id);

const create = async (exam:Exam):Promise<Exam> => {
  EXAMS.push(exam);
  return exam;
};

const update = async (id:number, data:Partial<Exam>):Promise<Exam | null> => {
  const i = EXAMS.findIndex((exam) => exam.id === id);
  if (i !== -1) {
    const uExam ={ ...EXAMS[i], ...data } as Exam
    EXAMS[i] = uExam
    return uExam;
  }
  return null;
};

const remove = async (id: number): Promise<Exam | null> => {
  const i = EXAMS.findIndex((exam) => exam.id === id);
  if (i !== -1) {
    const del =EXAMS.splice(i,1)[0];
    return del ||null
  }
  return null;
};

const getByTeacherId = async (id:number):Promise<Exam[] > => EXAMS.filter((exam) => exam.teacherId === id);
const getByAbiturientId = async (id:number):Promise<Exam[] > => EXAMS.filter((exam) => exam.abiturientId === id);

const removeTeacher = async (teacherId: number): Promise<boolean> => {
  EXAMS.forEach((exam, index) => {
    if (exam.teacherId === teacherId) {
       EXAMS[index] = { ...exam, teacherId: null } as unknown as Exam;
    }
  });
  return true;
};
const removeAbiturient = async (abiturientId: number): Promise<boolean> => {
  EXAMS.forEach((exam, index) => {
    if (exam.abiturientId === abiturientId) {
      EXAMS[index] = { ...exam, abiturientId: null } as unknown as Exam;
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
