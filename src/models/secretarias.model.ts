import { Secretaria } from '@/entities/secretaria.entity';

export interface SecretariaParams {
  nome: string;
  rg: number;
}

export interface SecretariaSearchParams extends SecretariaParams {
  id: string;
}

export abstract class SecretariasModel {
  abstract create(data: SecretariaParams): Promise<Secretaria>;
  abstract findById(id: string): Promise<Secretaria | null>;
  abstract update(id: string, data: Partial<SecretariaParams>): Promise<Secretaria>;
  abstract delete(id: string): Promise<Secretaria>;
  abstract search(params: Partial<SecretariaSearchParams>): Promise<Secretaria[]>;
}
