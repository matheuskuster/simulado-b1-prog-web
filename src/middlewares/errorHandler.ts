import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { generateErrorMessage } from 'zod-error';

import { AppError } from '@/errors/AppError';

export function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      message: generateZodMessage(err),
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

function generateZodMessage(error: ZodError) {
  return generateErrorMessage(error.issues);
}
