import { Abiturient } from './abiturient.model';

const ABITURIENTS: Abiturient[] = [];

const getAll = async (): Promise<Abiturient[]> => ABITURIENTS;

const getById = async (id: string): Promise<Abiturient | undefined> => ABITURIENTS.find((abi) => abi.id === id);

const create = async (abiturient: Abiturient): Promise<Abiturient> => {
  ABITURIENTS.push(abiturient);
  return abiturient;
};

const update = async (id: string, data: Partial<Abiturient>): Promise<Abiturient | null> => {
  const index = ABITURIENTS.findIndex((abi) => abi.id === id);
  if (index !== -1) {
    const updatedAbiturient = { ...ABITURIENTS[index], ...data } as Abiturient;
    ABITURIENTS[index] = updatedAbiturient;
    return updatedAbiturient;
  }
  return null;
};

const remove = async (id: string): Promise<Abiturient | null> => {
  const index = ABITURIENTS.findIndex((abi) => abi.id === id);
  if (index !== -1) {
    const deleted = ABITURIENTS.splice(index, 1)[0];
    return deleted || null;
  }
  return null;
};

export { getAll, getById, update, create, remove };