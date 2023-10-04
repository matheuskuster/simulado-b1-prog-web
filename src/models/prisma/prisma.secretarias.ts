import { PrismaClient } from '@prisma/client';

import { SecretariaParams, SecretariaSearchParams, SecretariasModel } from '../secretarias.model';

export class PrismaSecretariasModel implements SecretariasModel {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: SecretariaParams) {
    return await this.prisma.secretaria.create({ data });
  }

  async findById(id: string) {
    return await this.prisma.secretaria.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<SecretariaParams>) {
    return await this.prisma.secretaria.update({ where: { id }, data });
  }

  async delete(id: string) {
    return await this.prisma.secretaria.delete({ where: { id } });
  }

  async search(params: Partial<SecretariaSearchParams>) {
    return await this.prisma.secretaria.findMany({
      where: {
        id: params.id,
        nome: params.nome,
        rg: params.rg,
      },
    });
  }
}
