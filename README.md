# API de recados

API REST simples feita com Express, guardando os recados em memoria (some
tudo quando reinicia o servidor). Cada recado tem um `id` numerico e um
`texto`.

Pratiquei rotas GET/POST/PUT/DELETE, `express.json()` pra ler o corpo da
requisicao, validacao basica de entrada e status codes (200, 201, 400, 404).

## Rotas

- `GET /recados` — lista todos
- `POST /recados` — cria um novo, corpo `{ "texto": "..." }`
- `PUT /recados/:id` — edita o texto de um existente
- `DELETE /recados/:id` — remove

## Como rodar

```
npm install
npm start
```

Servidor sobe em `http://localhost:3000`. Testei as rotas com `curl`.
