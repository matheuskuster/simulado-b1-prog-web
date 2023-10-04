import { z } from 'zod';

const createPacienteSchema = z.object({
  body: z.object({
    nome: z.string().min(1).max(255),
    senha: z.number().min(1).max(255),
    usuario: z.string().min(1).max(255),
  }),
});

const readPacienteSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const updatePacienteSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    nome: z.string().min(1).max(255).optional(),
    senha: z.number().min(1).max(255).optional(),
    usuario: z.string().min(1).max(255).optional(),
  }),
});

const deletePacienteSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const searchPacienteSchema = z.object({
  query: z.object({
    id: z.string().uuid().optional(),
    nome: z.string().min(1).max(255).optional(),
    senha: z.number().min(1).max(255).optional(),
    usuario: z.string().min(1).max(255).optional(),
  }),
});

export const pacienteSchemas = {
  create: createPacienteSchema,
  read: readPacienteSchema,
  update: updatePacienteSchema,
  delete: deletePacienteSchema,
  search: searchPacienteSchema,
};
