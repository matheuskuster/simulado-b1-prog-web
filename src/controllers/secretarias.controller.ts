import { Request, Response } from 'express';

import { AppError } from '@/errors/AppError';
import { SecretariasModel } from '@/models/secretarias.model';
import { zParse } from '@/utils/zodParse';
import { secretariaSchemas } from '@/validators/secretaria.validator';

export class SecretariasController {
  constructor(private readonly secretariasModel: SecretariasModel) {}

  async create(req: Request, res: Response) {
    const { body } = await zParse(secretariaSchemas.create, req);

    const secretaria = await this.secretariasModel.create({
      nome: body.nome,
      rg: body.rg,
    });

    return res.status(201).json(secretaria);
  }

  async read(req: Request, res: Response) {
    const { params } = await zParse(secretariaSchemas.read, req);

    const secretaria = await this.secretariasModel.findById(params.id);

    if (!secretaria) {
      throw new AppError('Secretaria não encontrado', 404);
    }

    return res.status(200).json(secretaria);
  }

  async update(req: Request, res: Response) {
    const { params, body } = await zParse(secretariaSchemas.update, req);

    const foundSecretaria = await this.secretariasModel.findById(params.id);

    if (!foundSecretaria) {
      throw new AppError('Secretaria não encontrado', 404);
    }

    const secretaria = await this.secretariasModel.update(params.id, {
      nome: body.nome,
      rg: body.rg,
    });

    return res.status(200).json(secretaria);
  }

  async delete(req: Request, res: Response) {
    const { params } = await zParse(secretariaSchemas.delete, req);

    const secretaria = await this.secretariasModel.delete(params.id);

    if (!secretaria) {
      throw new AppError('Paciente não encontrado', 404);
    }

    return res.status(204).json();
  }

  async search(req: Request, res: Response) {
    const { query } = await zParse(secretariaSchemas.search, req);

    const secretarias = await this.secretariasModel.search({
      id: query.id,
      nome: query.nome,
      rg: query.rg,
    });

    return res.status(200).json(secretarias);
  }
}
