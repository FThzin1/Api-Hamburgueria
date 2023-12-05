const express = require('express');
const app = express();
const appRoutes = require('./src/routes/app.routes'); // Importa as rotas

const port = 3000;

app.use(express.json());
app.use('/', appRoutes); // Usa as rotas importadas

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
