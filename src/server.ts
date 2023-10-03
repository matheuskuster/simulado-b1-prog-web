import { createApp } from "./app";

function startServer() {
  const app = createApp();

  app.listen(3000, () => {
    console.log('🚀 Server is listening on port 3000');
  })
}

startServer();
