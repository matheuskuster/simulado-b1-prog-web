import { PrismaClient } from '@prisma/client';

import { AgendasModel, AgendaParams, AgendaSearchParams } from '../agendas.model';

export class PrismaAgendasModel implements AgendasModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: AgendaParams) {
    return await this.prisma.agenda.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.agenda.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<AgendaParams>) {
    return await this.prisma.agenda.update({ where: { id }, data });
  }

  async delete(id: string) {
    return await this.prisma.agenda.delete({ where: { id } });
  }

  async search(params: Partial<AgendaSearchParams>) {
    return await this.prisma.agenda.findMany({
      where: {
        id: params.id,
        data: params.data,
        nomePaciente: params.nomePaciente,
      },
    });
  }
}
