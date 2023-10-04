import express from 'express';

import { ConsultasController } from '@/controllers/consultas.controller';

export function consultasRouter(consultasController: ConsultasController) {
  const consultasRouter = express.Router();

  consultasRouter.get('/', (req, res) => consultasController.search(req, res));
  consultasRouter.get('/:id', (req, res) => consultasController.read(req, res));
  consultasRouter.post('/', (req, res) => consultasController.create(req, res));
  consultasRouter.put('/:id', (req, res) => consultasController.update(req, res));
  consultasRouter.delete('/:id', (req, res) => consultasController.delete(req, res));

  return consultasRouter;
}
