import { Exam } from './exam.model';

const EXAMS: Exam[] = [];

const getAll = async (): Promise<Exam[]> => EXAMS;

const getById = async (id: string): Promise<Exam | undefined> => 
  EXAMS.find((exam) => exam.id === id);

const create = async (exam: Exam): Promise<Exam> => {
  EXAMS.push(exam);
  return exam;
};

const update = async (id: string, data: Partial<Exam>): Promise<Exam | null> => {
  const index = EXAMS.findIndex((exam) => exam.id === id);
  if (index !== -1) {
    const updated = { ...EXAMS[index], ...data } as Exam;
    EXAMS[index] = updated;
    return updated;
  }
  return null;
};

const remove = async (id: string): Promise<Exam | null> => {
  const index = EXAMS.findIndex((exam) => exam.id === id);
  if (index !== -1) {
    return EXAMS.splice(index, 1)[0] || null;
  }
  return null;
};

const getByTeacherId = async (id: string): Promise<Exam[]> => 
  EXAMS.filter((exam) => exam.teacherId === id);

const getByAbiturientId = async (id: string): Promise<Exam[]> => 
  EXAMS.filter((exam) => exam.abiturientId === id);

const removeTeacher = async (teacherId: string): Promise<void> => {
  EXAMS.forEach((exam, index) => {
    if (exam.teacherId === teacherId) {
      EXAMS[index] = { ...exam, teacherId: null };
    }
  });
};

const removeAbiturient = async (abiturientId: string): Promise<void> => {
  EXAMS.forEach((exam, index) => {
    if (exam.abiturientId === abiturientId) {
      EXAMS[index] = { ...exam, abiturientId: null };
    }
  });
};

export { 
  getAll, getById, create, update, remove, 
  getByTeacherId, getByAbiturientId, removeTeacher, removeAbiturient 
};