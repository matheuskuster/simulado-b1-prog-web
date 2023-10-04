import express from 'express';

import { SecretariasController } from '@/controllers/secretarias.controller';

export function secretariasRouter(secretariasController: SecretariasController) {
  const secretariasRouter = express.Router();

  secretariasRouter.get('/', (req, res) => secretariasController.search(req, res));
  secretariasRouter.get('/:id', (req, res) => secretariasController.read(req, res));
  secretariasRouter.post('/', (req, res) => secretariasController.create(req, res));
  secretariasRouter.put('/:id', (req, res) => secretariasController.update(req, res));
  secretariasRouter.delete('/:id', (req, res) => secretariasController.delete(req, res));

  return secretariasRouter;
}
