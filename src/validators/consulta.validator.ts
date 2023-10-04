import { z } from 'zod';

const createConsultaSchema = z.object({
  body: z.object({
    data: z
      .string()
      .datetime()
      .transform((value) => new Date(value)),
    nomePaciente: z.string().min(1).max(255),
    nomeDentista: z.string().min(1).max(255),
  }),
});

const readConsultaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const updateConsultaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    data: z
      .string()
      .datetime()
      .transform((value) => new Date(value))
      .optional(),
    nomePaciente: z.string().min(1).max(255).optional(),
    nomeDentista: z.string().min(1).max(255).optional(),
  }),
});

const deleteConsultaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const searchConsultaSchema = z.object({
  query: z.object({
    id: z.string().uuid().optional(),
    data: z
      .string()
      .datetime()
      .transform((value) => new Date(value))
      .optional(),
    nomePaciente: z.string().min(1).max(255).optional(),
    nomeDentista: z.string().min(1).max(255).optional(),
  }),
});

export const consultaSchemas = {
  create: createConsultaSchema,
  read: readConsultaSchema,
  update: updateConsultaSchema,
  delete: deleteConsultaSchema,
  search: searchConsultaSchema,
};
