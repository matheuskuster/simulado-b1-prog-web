import type { Request } from 'express';
import { AnyZodObject, ZodError, z } from 'zod';

import { AppError } from '@/errors/AppError';

export async function zParse<T extends AnyZodObject>(schema: T, req: Request): Promise<z.infer<T>> {
  try {
    return schema.parseAsync(req);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new AppError(error.message, 400);
    }

    throw error;
  }
}
