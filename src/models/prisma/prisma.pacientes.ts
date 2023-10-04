import { PrismaClient } from '@prisma/client';

import { PacienteParams, PacienteSearchParams, PacientesModel } from '../pacientes.model';

export class PrismaPacientesModel implements PacientesModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: PacienteParams) {
    return await this.prisma.paciente.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.paciente.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<PacienteParams>) {
    return await this.prisma.paciente.update({ where: { id }, data });
  }

  async delete(id: string) {
    return await this.prisma.paciente.delete({ where: { id } });
  }

  async search(params: Partial<PacienteSearchParams>) {
    return await this.prisma.paciente.findMany({
      where: {
        id: params.id,
        nome: params.nome,
        senha: params.senha,
        usuario: params.usuario,
      },
    });
  }
}
