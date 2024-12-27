const startServer = require('./main');


startServer()
  .then((stopServer) => {
    console.log("Server started successfully.");

  
    const shutdown = () => {
      console.log("Shutting down the server...");
      stopServer().then(() => {
        console.log("Server stopped.");
        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  })
  .catch((err) => {
    console.error("Failed to start the server:", err);
    process.exit(1);
  });
