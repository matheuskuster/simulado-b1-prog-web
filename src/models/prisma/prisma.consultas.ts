import { PrismaClient } from '@prisma/client';

import { ConsultaParams, ConsultaSearchParams, ConsultasModel } from '../consultas.model';

export class PrismaConsultasModel implements ConsultasModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: ConsultaParams) {
    return await this.prisma.consulta.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.consulta.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<ConsultaParams>) {
    return await this.prisma.consulta.update({ where: { id }, data });
  }

  async delete(id: string) {
    return await this.prisma.consulta.delete({ where: { id } });
  }

  async search(params: Partial<ConsultaSearchParams>) {
    return await this.prisma.consulta.findMany({
      where: {
        id: params.id,
        nomeDentista: params.nomeDentista,
        nomePaciente: params.nomePaciente,
      },
    });
  }
}
