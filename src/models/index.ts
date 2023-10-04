import { PacientesModel } from './pacientes.model';
import { PrismaPacientesModel } from './prisma/prisma.pacientes';

export interface Models {
  pacientesModel: PacientesModel;
}

export function makeModels() {
  const pacientesModel = new PrismaPacientesModel();

  return {
    pacientesModel,
  };
}
