const serverless = require("serverless-http");
const express = require("express");
const { neon } = require("@neondatabase/serverless");

const app = express();

const client = async () => {
  return neon(process.env.DATABASE_URL, {
    fetchConnectionCache: true
  });
}

app.get("/", async (req, res, next) => {
  const sql = await client();
  const [{ now }] = await sql`SELECT now()`;
  return res.status(200).json({
    message: "Hello from root!",
    date: now
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
