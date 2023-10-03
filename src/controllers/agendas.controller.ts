import { PrismaClient } from '@prisma/client';

export class AgendasController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(body: { date: Date; namePaciente: string }) {
    const agenda = await this.prisma.agenda.create({
      data: {
        data: body.date,
        nomePaciente: body.namePaciente,
      },
    });

    return agenda;
  }

  async read(id: string) {
    const agenda = await this.prisma.agenda.findUnique({
      where: {
        id,
      },
    });

    return agenda;
  }

  async update(id: string, body: Partial<{ date: Date; namePaciente: string }>) {
    const agenda = await this.prisma.agenda.update({
      where: {
        id,
      },
      data: {
        data: body.date,
        nomePaciente: body.namePaciente,
      },
    });

    return agenda;
  }

  async delete(id: string) {
    const agenda = await this.prisma.agenda.delete({
      where: {
        id,
      },
    });

    return agenda;
  }

  async search(params: Partial<{ id: string; date: Date; namePaciente: string }>) {
    const agendas = await this.prisma.agenda.findMany({
      where: {
        id: params.id,
        data: params.date,
        nomePaciente: { contains: params.namePaciente },
      },
    });

    return agendas;
  }
}
