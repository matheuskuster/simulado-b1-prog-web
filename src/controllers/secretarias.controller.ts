import { PrismaClient } from '@prisma/client';

export class SecretariasController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(body: { name: string; rg: number }) {
    const secretaria = await this.prisma.secretaria.create({
      data: {
        nome: body.name,
        rg: body.rg,
      },
    });

    return secretaria;
  }

  async read(id: string) {
    const secretaria = await this.prisma.secretaria.findUnique({
      where: {
        id,
      },
    });

    return secretaria;
  }

  async update(id: string, body: Partial<{ name: string; rg: number }>) {
    const secretaria = await this.prisma.secretaria.update({
      where: {
        id,
      },
      data: {
        nome: body.name,
        rg: body.rg,
      },
    });

    return secretaria;
  }

  async delete(id: string) {
    const secretaria = await this.prisma.secretaria.delete({
      where: {
        id,
      },
    });

    return secretaria;
  }

  async search(params: Partial<{ id: string; name: string; rg: number }>) {
    const secretarias = await this.prisma.secretaria.findMany({
      where: {
        id: params.id,
        nome: { contains: params.name },
        rg: params.rg,
      },
    });

    return secretarias;
  }
}
