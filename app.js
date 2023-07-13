const express = require("express");
const app = express();
const fs = require("node:fs");

// app.get("/", (request, response) => {
//   console.log("got get request inside app js");
//   return response.status(200).json({
//     message: "API working",
//   });
// });

app.get("/createFile", (request, response) => {
  const fileDate = new Date().toUTCString().slice(5, 16).split(" ").join("-");
  const fileHours = new Date().getHours().toString();
  const fileMinutes = new Date().getMinutes().toString();
  const fileSeconds = new Date().getSeconds().toString();

  const fileName = `D${fileDate}_T${fileHours}${fileMinutes}${fileSeconds}`;
  let fileData = new Date().toString();
  console.log(fileName);

  fs.appendFile(`files/${fileName}.txt`, fileData, (err) => {
    if (err) {
      return response.status(400).json({
        message: err,
      });
    } else {
      return response.status(200).json({
        message: "file created successfully",
        fileName: fileName,
      });
    }
  });
});

app.get("/readFile/:name", (request, response) => {
  const readFileName = request.params.name;
  console.log(readFileName);
  fs.readFile(`files/${readFileName}.txt`, "utf-8", (err, data) => {
    if (err) {
      return response.status(400).json({
        message: err,
        note: "do not add .txt at the end; it is added in the code",
      });
    } else {
      return response.status(200).send(data);
    }
  });
});

module.exports = app;

// const express = require("express");
// const app = express();
// const fs = require("node:fs/promises");

// app.get("/", (request, response) => {
//   console.log("got get request inside app js");
//   return response.status(200).json({
//     message: "API working",
//   });
// });

// app.get("/createFile", async (request, response) => {
//   const fileDate = new Date().toUTCString().slice(5, 16).split(" ").join("-");
//   const fileHours = new Date().getHours().toString();
//   const fileMinutes = new Date().getMinutes().toString();
//   const fileSeconds = new Date().getSeconds().toString();

//   const fileName = `D${fileDate}_T${fileHours}${fileMinutes}${fileSeconds}`;
//   let fileData = new Date().toString();
//   console.log(fileName);
//   try {
//     await fs.appendFile(`files/${fileName}.txt`, fileData);
//     return response.status(200).json({
//       message: "file created successfully",
//     });
//   } catch (err) {
//     return response.status(400).json({
//       message: err,
//     });
//   }
// });

// module.exports = app;
