import { ConsultasController } from './consultas.controller';
import { PacientesController } from './pacientes.controller';
import { SecretariasController } from './secretarias.controller';

import { Models } from '@/models';

export interface Controllers {
  pacientesController: PacientesController;
  consultasController: ConsultasController;
  secretariasController: SecretariasController;
}

export function makeControllers(models: Models) {
  const pacientesController = new PacientesController(models.pacientesModel);
  const consultasController = new ConsultasController(models.consultasModel);
  const secretariasController = new SecretariasController(models.secretariasModel);

  return {
    pacientesController,
    consultasController,
    secretariasController,
  };
}
