import express from 'express';

import { agendasRouter } from './agendas.router';
import { consultasRouter } from './consultas.router';
import { pacientesRouter } from './pacientes.router';
import { secretariasRouter } from './secretarias.router';

export const router = express.Router();

router.use('/pacientes', pacientesRouter);
router.use('/consultas', consultasRouter);
router.use('/agendas', agendasRouter);
router.use('/secretarias', secretariasRouter);
