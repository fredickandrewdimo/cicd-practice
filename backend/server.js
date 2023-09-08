const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello, MERN stack!");
});

const server = app.listen(3545, () => {
  console.log("Server is running on port 3545");
});

module.exports = server; // Export the server instance
