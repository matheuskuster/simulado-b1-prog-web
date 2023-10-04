import { Request, Response } from 'express';

import { ConsultasModel } from '@/models/consultas.model';
import { zParse } from '@/utils/zodParse';
import { consultaSchemas } from '@/validators/consulta.validator';

export class ConsultasController {
  constructor(private readonly consultasModel: ConsultasModel) {}

  async create(req: Request, res: Response) {
    const { body } = await zParse(consultaSchemas.create, req);

    const consulta = await this.consultasModel.create(body);

    return res.status(201).json(consulta);
  }

  async read(req: Request, res: Response) {
    const { params } = await zParse(consultaSchemas.read, req);

    const consulta = await this.consultasModel.findById(params.id);

    return res.status(200).json(consulta);
  }

  async update(req: Request, res: Response) {
    const { params, body } = await zParse(consultaSchemas.update, req);

    const consulta = await this.consultasModel.update(params.id, body);

    return res.status(200).json(consulta);
  }

  async delete(req: Request, res: Response) {
    const { params } = await zParse(consultaSchemas.delete, req);

    await this.consultasModel.delete(params.id);

    return res.status(204).json();
  }

  async search(req: Request, res: Response) {
    const { query } = await zParse(consultaSchemas.search, req);

    const consultas = await this.consultasModel.search(query);

    return res.status(200).json(consultas);
  }
}
