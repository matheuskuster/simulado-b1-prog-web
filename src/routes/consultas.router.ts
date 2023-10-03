import express, { Request, Response } from 'express';

import { ConsultasController } from '@/controllers/consultas.controller';

export const consultasRouter = express.Router();

const consultasController = new ConsultasController();

consultasRouter.get('/', async (req: Request, res: Response) => {
  const consultas = await consultasController.search({
    id: req.query.id as string,
    namePaciente: req.query.nomePaciente as string,
    nameDentista: req.query.nomeDentista as string,
  });

  return res.status(200).json(consultas);
});

consultasRouter.get('/:id', async (req: Request, res: Response) => {
  const consulta = await consultasController.read(req.params.id);
  return res.status(200).json(consulta);
});

consultasRouter.post('/', async (req: Request, res: Response) => {
  const consulta = await consultasController.create({
    date: req.body.data,
    namePaciente: req.body.nomePaciente,
    nameDentista: req.body.nomeDentista,
  });

  return res.status(201).json(consulta);
});

consultasRouter.put('/:id', async (req: Request, res: Response) => {
  const consulta = await consultasController.update(req.params.id, {
    date: req.body.data,
    namePaciente: req.body.nomePaciente,
    nameDentista: req.body.nomeDentista,
  });

  return res.status(200).json(consulta);
});

consultasRouter.delete('/:id', async (req: Request, res: Response) => {
  const consulta = await consultasController.delete(req.params.id);
  return res.status(200).json(consulta);
});
