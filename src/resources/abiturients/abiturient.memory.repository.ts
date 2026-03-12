import Abiturient from "./abiturient.model"

const ABITURIENTS: Abiturient[]=[]

const getAll=async ():Promise<Abiturient[]> =>ABITURIENTS

const getById = async (id: number): Promise<Abiturient | undefined> => {
  return ABITURIENTS.find((abi) => abi.id === id);
};

const create = async (abiturient: Abiturient):Promise<Abiturient> =>{ABITURIENTS.push(abiturient);return abiturient}

const update = async (id:number, data:Partial<Abiturient>):Promise<Abiturient | null> =>{
  const i =ABITURIENTS.findIndex((abi)=> abi.id===id);
  if(i!==-1){
    const uAbi ={...ABITURIENTS[i],...data} as Abiturient;
    ABITURIENTS[i] = uAbi;
    return uAbi;
  }
  return null;
}

const remove = async (id:number) :Promise<Abiturient | null> =>{
  const i = ABITURIENTS.findIndex((abi)=> abi.id===id);
  if(i!==-1){
    const del = ABITURIENTS.splice(i, 1)[0];
    return del || null
  }
  return null;
};
export {getAll, getById, update, create, remove}