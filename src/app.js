const path = require("path");
const express = require("express");
const homeRoutes = require("./routes/homeRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", homeRoutes);

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `Porta ${PORT} ja esta em uso. Feche o outro processo ou use outra porta, por exemplo:\n` +
        `  PowerShell:  $env:PORT=3001; npm start\n` +
        `  CMD:         set PORT=3001 && npm start`
    );
  } else {
    console.error(err);
  }
  process.exit(1);
});
