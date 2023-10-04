import { Consulta } from '@/entities/consulta.entity';

export interface ConsultaParams {
  data: Date;
  nomePaciente: string;
  nomeDentista: string;
}

export interface ConsultaSearchParams extends ConsultaParams {
  id: string;
}

export abstract class ConsultasModel {
  abstract create(data: ConsultaParams): Promise<Consulta>;
  abstract findById(id: string): Promise<Consulta | null>;
  abstract update(id: string, data: Partial<ConsultaParams>): Promise<Consulta>;
  abstract delete(id: string): Promise<Consulta>;
  abstract search(params: Partial<ConsultaSearchParams>): Promise<Consulta[]>;
}
