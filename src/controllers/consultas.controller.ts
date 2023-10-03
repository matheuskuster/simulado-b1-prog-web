import { PrismaClient } from '@prisma/client';

export class ConsultasController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(body: { date: Date; namePaciente: string; nameDentista: string }) {
    const consulta = await this.prisma.consulta.create({
      data: {
        data: body.date,
        nomeDentista: body.nameDentista,
        nomePaciente: body.namePaciente,
      },
    });

    return consulta;
  }

  async read(id: string) {
    const consulta = await this.prisma.consulta.findUnique({
      where: {
        id,
      },
    });

    return consulta;
  }

  async update(
    id: string,
    body: Partial<{ date: Date; namePaciente: string; nameDentista: string }>,
  ) {
    const consulta = await this.prisma.consulta.update({
      where: {
        id,
      },
      data: {
        data: body.date,
        nomeDentista: body.nameDentista,
        nomePaciente: body.namePaciente,
      },
    });

    return consulta;
  }

  async delete(id: string) {
    const consulta = await this.prisma.consulta.delete({
      where: {
        id,
      },
    });

    return consulta;
  }

  async search(
    params: Partial<{ id: string; date: Date; namePaciente: string; nameDentista: string }>,
  ) {
    const consultas = await this.prisma.consulta.findMany({
      where: {
        id: params.id,
        data: params.date,
        nomeDentista: { contains: params.nameDentista },
        nomePaciente: { contains: params.namePaciente },
      },
    });

    return consultas;
  }
}
