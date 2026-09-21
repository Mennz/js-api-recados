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

let proximoId = 3;

app.get("/recados", (req, res) => {
  res.json(recados);
});

app.post("/recados", (req, res) => {
  const { texto } = req.body;

  if (!texto) {
    return res.status(400).json({ erro: "texto e obrigatorio" });
  }

  const recado = { id: proximoId, texto };
  proximoId++;
  recados.push(recado);

  res.status(201).json(recado);
});

app.put("/recados/:id", (req, res) => {
  const id = Number(req.params.id);
  const { texto } = req.body;

  const recado = recados.find((r) => r.id === id);

  if (!recado) {
    return res.status(404).json({ erro: "recado nao encontrado" });
  }

  if (!texto) {
    return res.status(400).json({ erro: "texto e obrigatorio" });
  }

  recado.texto = texto;
  res.json(recado);
});

app.listen(PORTA, () => {
  console.log(`servidor rodando na porta ${PORTA}`);
});
