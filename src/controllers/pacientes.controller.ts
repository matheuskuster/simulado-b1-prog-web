import { PrismaClient } from '@prisma/client';

export class PacientesController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(body: { name: string; senha: number; usuario: string }) {
    const paciente = await this.prisma.paciente.create({
      data: {
        nome: body.name,
        senha: body.senha,
        usuario: body.usuario,
      },
    });

    return paciente;
  }

  async read(id: string) {
    const paciente = await this.prisma.paciente.findUnique({
      where: {
        id,
      },
    });

    return paciente;
  }

  async update(id: string, body: Partial<{ name: string; senha: number; usuario: string }>) {
    const paciente = await this.prisma.paciente.update({
      where: {
        id,
      },
      data: {
        nome: body.name,
        senha: body.senha,
        usuario: body.usuario,
      },
    });

    return paciente;
  }

  async delete(id: string) {
    const paciente = await this.prisma.paciente.delete({
      where: {
        id,
      },
    });

    return paciente;
  }

  async search(params: Partial<{ id: string; name: string; senha: number; usuario: string }>) {
    const pacientes = await this.prisma.paciente.findMany({
      where: {
        id: params.id,
        nome: { contains: params.name },
        senha: params.senha,
        usuario: { contains: params.usuario },
      },
    });

    return pacientes;
  }
}
