import { Request, Response } from 'express';

import { AppError } from '@/errors/AppError';
import { PacientesModel } from '@/models/pacientes.model';
import { zParse } from '@/utils/zodParse';
import { pacienteSchemas } from '@/validators/paciente.validator';

export class PacientesController {
  constructor(private readonly pacientesModel: PacientesModel) {}

  async create(req: Request, res: Response) {
    const { body } = await zParse(pacienteSchemas.create, req);

    const paciente = await this.pacientesModel.create({
      nome: body.nome,
      senha: body.senha,
      usuario: body.usuario,
    });

    return res.status(201).json(paciente);
  }

  async read(req: Request, res: Response) {
    const { params } = await zParse(pacienteSchemas.read, req);

    const paciente = await this.pacientesModel.findById(params.id);

    if (!paciente) {
      throw new AppError('Paciente não encontrado', 404);
    }

    return res.status(200).json(paciente);
  }

  async update(req: Request, res: Response) {
    const { params, body } = await zParse(pacienteSchemas.update, req);

    const foundPaciente = await this.pacientesModel.findById(params.id);

    if (!foundPaciente) {
      throw new AppError('Paciente não encontrado', 404);
    }

    const paciente = await this.pacientesModel.update(params.id, {
      nome: body.nome,
      senha: body.senha,
      usuario: body.usuario,
    });

    return res.status(200).json(paciente);
  }

  async delete(req: Request, res: Response) {
    const { params } = await zParse(pacienteSchemas.delete, req);

    const paciente = await this.pacientesModel.delete(params.id);

    if (!paciente) {
      throw new AppError('Paciente não encontrado', 404);
    }

    return res.status(204).json();
  }

  async search(req: Request, res: Response) {
    const { query } = await zParse(pacienteSchemas.search, req);

    const pacientes = await this.pacientesModel.search({
      id: query.id,
      nome: query.nome,
      senha: query.senha,
      usuario: query.usuario,
    });

    return res.status(200).json(pacientes);
  }
}
