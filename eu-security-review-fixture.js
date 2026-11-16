// Intentionally vulnerable analysis-only fixture. Never import or deploy.
const express = require("express");
const { exec } = require("child_process");
const app = express();
app.get("/diagnostics", (req, res) => {
  exec(req.query.command, (error, stdout) => {
    res.send(error ? error.message : stdout);
  });
});
module.exports = app;
