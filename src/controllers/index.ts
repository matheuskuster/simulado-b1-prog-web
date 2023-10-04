import { ConsultasController } from './consultas.controller';
import { PacientesController } from './pacientes.controller';

import { Models } from '@/models';

export interface Controllers {
  pacientesController: PacientesController;
  consultasController: ConsultasController;
}

export function makeControllers(models: Models) {
  const pacientesController = new PacientesController(models.pacientesModel);
  const consultasController = new ConsultasController(models.consultasModel);

  return {
    pacientesController,
    consultasController,
  };
}
