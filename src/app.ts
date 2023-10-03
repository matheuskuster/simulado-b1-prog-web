import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { router } from './routes';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(router);

  return app;
}
