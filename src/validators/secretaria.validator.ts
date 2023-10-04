import { z } from 'zod';

const createSecretariaSchema = z.object({
  body: z.object({
    nome: z.string().min(1).max(255),
    rg: z.number().min(1).max(7),
  }),
});

const readSecretariaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const updateSecretariaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    nome: z.string().min(1).max(255).optional(),
    rg: z.number().min(1).max(7).optional(),
  }),
});

const deleteSecretariaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const searchSecretariaSchema = z.object({
  query: z.object({
    id: z.string().uuid().optional(),
    nome: z.string().min(1).max(255).optional(),
    rg: z.number().min(1).max(7).optional(),
  }),
});

export const secretariaSchemas = {
  create: createSecretariaSchema,
  read: readSecretariaSchema,
  update: updateSecretariaSchema,
  delete: deleteSecretariaSchema,
  search: searchSecretariaSchema,
};
