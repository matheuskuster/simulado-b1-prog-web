import cors from 'cors';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';

import { router } from './routes';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(router);

  app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    return res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  });

  return app;
}
