const express = require("express");

const app = express();
const PORTA = 3000;

app.use(express.json());

let recados = [
  { id: 1, texto: "comprar pao" },
  { id: 2, texto: "estudar express" },
];

app.get("/", (req, res) => {
  res.send("api de recados no ar");
});

app.get("/recados", (req, res) => {
  res.json(recados);
});

app.listen(PORTA, () => {
  console.log(`servidor rodando na porta ${PORTA}`);
});
