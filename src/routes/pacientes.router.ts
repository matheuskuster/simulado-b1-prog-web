import express, { Request, Response } from 'express';

import { PacientesController } from '@/controllers/pacientes.controller';

export const pacientesRouter = express.Router();

const pacientesController = new PacientesController();

pacientesRouter.get('/', async (req: Request, res: Response) => {
  const pacientes = await pacientesController.search({
    id: req.query.id as string,
    name: req.query.nome as string,
    senha: req.query.senha ? Number(req.query.senha) : undefined,
    usuario: req.query.usuario as string,
  });

  return res.status(200).json(pacientes);
});

pacientesRouter.get('/:id', async (req: Request, res: Response) => {
  const paciente = await pacientesController.read(req.params.id);
  return res.status(200).json(paciente);
});

pacientesRouter.post('/', async (req: Request, res: Response) => {
  const paciente = await pacientesController.create({
    name: req.body.nome,
    senha: req.body.senha,
    usuario: req.body.usuario,
  });

  return res.status(201).json(paciente);
});

pacientesRouter.put('/:id', async (req: Request, res: Response) => {
  const paciente = await pacientesController.update(req.params.id, {
    name: req.body.nome,
    senha: req.body.senha,
    usuario: req.body.usuario,
  });

  return res.status(200).json(paciente);
});

pacientesRouter.delete('/:id', async (req: Request, res: Response) => {
  const paciente = await pacientesController.delete(req.params.id);
  return res.status(200).json(paciente);
});
