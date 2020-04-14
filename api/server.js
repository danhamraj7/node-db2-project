const express = require("express");
const helmet = require("helmet");

//const carsRouter = require("../cars/carsRouter.js");

const server = express();

server.use(express.json());

server.use(helmet());

//server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("server is up and running!");
});

module.exports = server;
