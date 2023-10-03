import 'dotenv/config';

import { createApp } from './app';

function startServer() {
  const app = createApp();

  const port = process.env.PORT ?? 3000;

  app.listen(3000, () => {
    console.log(`🚀 Server is listening on port ${port}`);
  });
}

startServer();
