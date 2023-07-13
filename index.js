const express = require("express");
const httpServer = express();

const app = require("./app");

// httpServer.use("/api", )
httpServer.get("/", (request, response) => {
  console.log("got get request inside app js");
  return response.status(200).end(`Welcome to nodejs file system
    To Create file: /createFile,
    to read file: /readFile/:fileName,
  `);

  // return response.status(200).json({
  //   message: "Welcome to nodejs file system",
  //   ToCreateFile: "/createFile",
  //   toReadFile: "/readFile/:filename",
  // });
});

httpServer.use("/api", app);

httpServer.listen(5000, "localhost", () => {
  console.log("Server started at port 5000");
});
