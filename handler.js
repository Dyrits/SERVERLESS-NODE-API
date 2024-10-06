const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!"
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!"
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found"
  });
});

// We don't listen to a port, we let the serverless function handle that.

exports.handler = serverless(app);
