const express = require("express");
const httpServer = express();

const app = require("./app");

// httpServer.use("/api", )

httpServer.use("/api", app);

httpServer.listen(5000, "localhost", () => {
  console.log("Server started at port 5000");
});
