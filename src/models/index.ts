import { AgendasModel } from './agendas.model';
import { ConsultasModel } from './consultas.model';
import { PacientesModel } from './pacientes.model';
import { PrismaAgendasModel } from './prisma/prisma.agendas';
import { PrismaConsultasModel } from './prisma/prisma.consultas';
import { PrismaPacientesModel } from './prisma/prisma.pacientes';
import { PrismaSecretariasModel } from './prisma/prisma.secretarias';
import { SecretariasModel } from './secretarias.model';

export interface Models {
  pacientesModel: PacientesModel;
  consultasModel: ConsultasModel;
  secretariasModel: SecretariasModel;
  agendasModel: AgendasModel;
}

export function makeModels() {
  const pacientesModel = new PrismaPacientesModel();
  const consultasModel = new PrismaConsultasModel();
  const secretariasModel = new PrismaSecretariasModel();
  const agendasModel = new PrismaAgendasModel();

  return {
    pacientesModel,
    consultasModel,
    secretariasModel,
    agendasModel,
  };
}
