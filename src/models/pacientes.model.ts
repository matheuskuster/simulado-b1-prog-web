import { Paciente } from '@/entities/paciente.entity';

export interface PacienteParams {
  nome: string;
  senha: number;
  usuario: string;
}

export interface PacienteSearchParams extends PacienteParams {
  id: string;
}

export abstract class PacientesModel {
  abstract create(data: PacienteParams): Promise<Paciente>;
  abstract findById(id: string): Promise<Paciente | null>;
  abstract update(id: string, data: Partial<PacienteParams>): Promise<Paciente>;
  abstract delete(id: string): Promise<Paciente>;
  abstract search(params: Partial<PacienteSearchParams>): Promise<Paciente[]>;
}
