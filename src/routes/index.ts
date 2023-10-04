import express from 'express';

import { agendasRouter } from './agendas.router';
import { consultasRouter } from './consultas.router';
import { pacientesRouter } from './pacientes.router';
import { secretariasRouter } from './secretarias.router';

import { Controllers } from '@/controllers';

export function makeRoutes(controllers: Controllers) {
  const router = express.Router();

  router.use('/pacientes', pacientesRouter(controllers.pacientesController));
  router.use('/consultas', consultasRouter(controllers.consultasController));
  router.use('/secretarias', secretariasRouter(controllers.secretariasController));
  router.use('/agendas', secretariasRouter);

  return router;
}
