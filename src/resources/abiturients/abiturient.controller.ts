import { Request, Response } from 'express';
import * as abiService from './abiturient.service';

const getAll = async (_req: Request, res: Response) => {
  const abiturients = await abiService.getAll();
  return res.json(abiturients);
};

const getById = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const abi = await abiService.getById(id);
  if (!abi) return res.status(404).send('Abiturient not found');
  return res.json(abi);
};

const create = async (req: Request, res: Response) => {
  const abi = await abiService.create(req.body);
  return res.status(201).json(abi);
};

const update = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const abi = await abiService.update(id, req.body);
  if (!abi) return res.status(404).send('Abiturient not found');
  return res.json(abi);
};

const remove = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  const abi = await abiService.remove(id);
  if (!abi) return res.status(404).send('Abiturient not found');
  return res.status(204).send('Abiturient deleted');
};

export default { getAll, getById, create, update, remove };