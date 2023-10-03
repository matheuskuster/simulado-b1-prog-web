import express, { Request, Response } from 'express';

import { SecretariasController } from '@/controllers/secretarias.controller';

export const secretariasRouter = express.Router();

const secretariasController = new SecretariasController();

secretariasRouter.get('/', async (req: Request, res: Response) => {
  const secretarias = await secretariasController.search({
    id: req.query.id as string,
    name: req.query.nome as string,
    rg: req.query.rg ? Number(req.query.rg) : undefined,
  });

  return res.status(200).json(secretarias);
});

secretariasRouter.get('/:id', async (req: Request, res: Response) => {
  const secretaria = await secretariasController.read(req.params.id);
  return res.status(200).json(secretaria);
});

secretariasRouter.post('/', async (req: Request, res: Response) => {
  const secretaria = await secretariasController.create({
    name: req.body.nome,
    rg: req.body.rg,
  });

  return res.status(201).json(secretaria);
});

secretariasRouter.put('/:id', async (req: Request, res: Response) => {
  const secretaria = await secretariasController.update(req.params.id, {
    name: req.body.nome,
    rg: req.body.rg,
  });

  return res.status(200).json(secretaria);
});

secretariasRouter.delete('/:id', async (req: Request, res: Response) => {
  const secretaria = await secretariasController.delete(req.params.id);
  return res.status(200).json(secretaria);
});
