import { ConsultasModel } from './consultas.model';
import { PacientesModel } from './pacientes.model';
import { PrismaConsultasModel } from './prisma/prisma.consultas';
import { PrismaPacientesModel } from './prisma/prisma.pacientes';
import { PrismaSecretariasModel } from './prisma/prisma.secretarias';
import { SecretariasModel } from './secretarias.model';

export interface Models {
  pacientesModel: PacientesModel;
  consultasModel: ConsultasModel;
  secretariasModel: SecretariasModel;
}

export function makeModels() {
  const pacientesModel = new PrismaPacientesModel();
  const consultasModel = new PrismaConsultasModel();
  const secretariasModel = new PrismaSecretariasModel();

  return {
    pacientesModel,
    consultasModel,
    secretariasModel,
  };
}
