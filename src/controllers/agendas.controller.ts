import { Request, Response } from 'express';

import { AppError } from '@/errors/AppError';
import { AgendasModel } from '@/models/agendas.model';
import { zParse } from '@/utils/zodParse';
import { agendaSchemas } from '@/validators/agenda.validator';

export class AgendasController {
  constructor(private readonly agendasModel: AgendasModel) {}

  async create(req: Request, res: Response) {
    const { body } = await zParse(agendaSchemas.create, req);

    const agenda = await this.agendasModel.create(body);

    return res.status(201).json(agenda);
  }

  async read(req: Request, res: Response) {
    const { params } = await zParse(agendaSchemas.read, req);

    const agenda = await this.agendasModel.findById(params.id);

    if (!agenda) {
      throw new AppError('Agenda não encontrada', 404);
    }

    return res.status(200).json(agenda);
  }

  async update(req: Request, res: Response) {
    const { params, body } = await zParse(agendaSchemas.update, req);

    const foundAgenda = await this.agendasModel.findById(params.id);

    if (!foundAgenda) {
      throw new AppError('Agenda não encontrada', 404);
    }

    const agenda = await this.agendasModel.update(params.id, body);

    return res.status(200).json(agenda);
  }

  async delete(req: Request, res: Response) {
    const { params } = await zParse(agendaSchemas.delete, req);

    const agenda = await this.agendasModel.delete(params.id);

    if (!agenda) {
      throw new AppError('Agenda não encontrada', 404);
    }

    return res.status(204).json();
  }

  async search(req: Request, res: Response) {
    const { query } = await zParse(agendaSchemas.search, req);

    const agendas = await this.agendasModel.search(query);

    return res.status(200).json(agendas);
  }
}
