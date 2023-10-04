import express from 'express';

import { AgendasController } from '@/controllers/agendas.controller';

export function agendasRouter(agendasController: AgendasController) {
  const agendasRouter = express.Router();

  agendasRouter.get('/', (req, res) => agendasController.search(req, res));
  agendasRouter.get('/:id', (req, res) => agendasController.read(req, res));
  agendasRouter.post('/', (req, res) => agendasController.create(req, res));
  agendasRouter.put('/:id', (req, res) => agendasController.update(req, res));
  agendasRouter.delete('/:id', (req, res) => agendasController.delete(req, res));

  return agendasRouter;
}
