import express from 'express';

import { PacientesController } from '@/controllers/pacientes.controller';

export function pacientesRouter(pacientesController: PacientesController) {
  const pacientesRouter = express.Router();

  pacientesRouter.get('/', pacientesController.search);
  pacientesRouter.get('/:id', pacientesController.read);
  pacientesRouter.post('/', pacientesController.create);
  pacientesRouter.put('/:id', pacientesController.update);
  pacientesRouter.delete('/:id', pacientesController.delete);

  return pacientesRouter;
}
