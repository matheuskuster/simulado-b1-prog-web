import { Agenda } from '@/entities/agenda.entity';

export interface AgendaParams {
  data: Date;
  nomePaciente: string;
}

export interface AgendaSearchParams extends AgendaParams {
  id: string;
}

export abstract class AgendasModel {
  abstract create(data: AgendaParams): Promise<Agenda>;
  abstract findById(id: string): Promise<Agenda | null>;
  abstract update(id: string, data: Partial<AgendaParams>): Promise<Agenda>;
  abstract delete(id: string): Promise<Agenda>;
  abstract search(params: Partial<AgendaSearchParams>): Promise<Agenda[]>;
}
