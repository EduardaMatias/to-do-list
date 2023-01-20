const express = require("express"); // busca o express dentro do node modules
const app = express(); // a constante recebe a função express sendo executada

app.get("/home", (req, res) => {
  res.send("Hello World");
}); // função get com dois parametros (rota, função de callback com requisição e resposta)

app.listen(3000);
