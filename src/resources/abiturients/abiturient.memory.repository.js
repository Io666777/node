const ABITURIENTS = [];

const getAll = async () => ABITURIENTS;

const getById = async (id) => ABITURIENTS.find((abi) => abi.id === id);

const create = async (abiturient) => {
  ABITURIENTS.push(abiturient);
  return abiturient;
};

const update = async (id, data) => {
  const i = ABITURIENTS.findIndex((abi) => abi.id === id);
  if (i !== -1) {
    ABITURIENTS[i] = { ...ABITURIENTS[i], ...data };
    return ABITURIENTS[i];
  }
  return null;
};

const remove = async (id) => {
  const i = ABITURIENTS.findIndex((abi) => abi.id === id);
  if (i !== -1) {
    return ABITURIENTS.splice(i, 1)[0];
  }
  return null;
};

export { getAll, getById, create, update, remove };
