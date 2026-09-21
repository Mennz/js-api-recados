const express = require("express");

const app = express();
const PORTA = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api de recados no ar");
});

app.listen(PORTA, () => {
  console.log(`servidor rodando na porta ${PORTA}`);
});
