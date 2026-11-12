const path = require("path");
const express = require("express");

const DIST = path.join(__dirname, "..", "dist");
const PORT = process.env.PORT || 4173;

const app = express();

app.use(express.static(DIST));

app.listen(PORT, () => {
  console.log(`Preview estático em http://localhost:${PORT}`);
  console.log(`PT: http://localhost:${PORT}/pt/`);
});
