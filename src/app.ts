import 'express-async-errors';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { makeControllers } from './controllers';
import { errorHandler } from './middlewares/errorHandler';
import { makeModels } from './models';
import { makeRoutes } from './routes';

export function createApp() {
  const app = express();

  // Create models and controllers using the factory functions
  const models = makeModels();
  const controllers = makeControllers(models);

  // Enable CORS
  app.use(cors());

  // Enable JSON body parsing
  app.use(express.json());

  // Enable logging
  app.use(morgan('dev'));

  // Create routes using the factory function
  app.use(makeRoutes(controllers));

  // Create error handler middleware
  app.use(errorHandler);

  return app;
}
