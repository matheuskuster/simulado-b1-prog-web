import express, { Request, Response } from 'express';

import { AgendasController } from '@/controllers/agendas.controller';

export const agendasRouter = express.Router();

const agendasController = new AgendasController();

agendasRouter.get('/', async (req: Request, res: Response) => {
  const agendas = await agendasController.search({
    id: req.query.id as string,
    namePaciente: req.query.nomePaciente as string,
    date: req.query.data ? new Date(req.query.data as string) : undefined,
  });

  return res.status(200).json(agendas);
});

agendasRouter.get('/:id', async (req: Request, res: Response) => {
  const agenda = await agendasController.read(req.params.id);
  return res.status(200).json(agenda);
});

agendasRouter.post('/', async (req: Request, res: Response) => {
  const agenda = await agendasController.create({
    date: req.body.data,
    namePaciente: req.body.nomePaciente,
  });

  return res.status(201).json(agenda);
});

agendasRouter.put('/:id', async (req: Request, res: Response) => {
  const agenda = await agendasController.update(req.params.id, {
    date: req.body.data,
    namePaciente: req.body.nomePaciente,
  });

  return res.status(200).json(agenda);
});

agendasRouter.delete('/:id', async (req: Request, res: Response) => {
  const agenda = await agendasController.delete(req.params.id);
  return res.status(200).json(agenda);
});
