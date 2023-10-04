import express from 'express';

import { PacientesController } from '@/controllers/pacientes.controller';

export function pacientesRouter(pacientesController: PacientesController) {
  const pacientesRouter = express.Router();

  pacientesRouter.get('/', (req, res) => pacientesController.search(req, res));
  pacientesRouter.get('/:id', (req, res) => pacientesController.read(req, res));
  pacientesRouter.post('/', (req, res) => pacientesController.create(req, res));
  pacientesRouter.put('/:id', (req, res) => pacientesController.update(req, res));
  pacientesRouter.delete('/:id', (req, res) => pacientesController.delete(req, res));

  return pacientesRouter;
}
