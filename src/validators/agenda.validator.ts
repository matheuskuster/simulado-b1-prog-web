import { z } from 'zod';

const createAgendaSchema = z.object({
  body: z.object({
    data: z
      .string()
      .datetime()
      .transform((value) => new Date(value)),
    nomePaciente: z.string().min(1).max(255),
  }),
});

const readAgendaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const updateAgendaSchema = z.object({
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
  }),
});

const deleteAgendaSchema = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});

const searchAgendaSchema = z.object({
  query: z.object({
    id: z.string().uuid().optional(),
    data: z
      .string()
      .datetime()
      .transform((value) => new Date(value))
      .optional(),
    nomePaciente: z.string().min(1).max(255).optional(),
  }),
});

export const agendaSchemas = {
  create: createAgendaSchema,
  read: readAgendaSchema,
  update: updateAgendaSchema,
  delete: deleteAgendaSchema,
  search: searchAgendaSchema,
};
