import { PacientesModel } from './pacientes.model';
import { PrismaConsultasModel } from './prisma/prisma.consultas';
import { PrismaPacientesModel } from './prisma/prisma.pacientes';

export interface Models {
  pacientesModel: PacientesModel;
  consultasModel: PrismaConsultasModel;
}

export function makeModels() {
  const pacientesModel = new PrismaPacientesModel();
  const consultasModel = new PrismaConsultasModel();

  return {
    pacientesModel,
    consultasModel,
  };
}
