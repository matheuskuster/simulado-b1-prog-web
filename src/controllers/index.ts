import { PacientesController } from './pacientes.controller';

import { Models } from '@/models';

export interface Controllers {
  pacientesController: PacientesController;
}

export function makeControllers(models: Models) {
  const pacientesController = new PacientesController(models.pacientesModel);

  return {
    pacientesController,
  };
}
