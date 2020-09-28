const express = require('express');
const app = express();
const porta = 3000;
const mulheres = require('./mulheres.json');

app.use(express.json());

app.get('/mulheres', (request, response) => {
    response.json(mulheres);
});

app.get('/mulheres/:id', (request, response) => {
    const id = request.params.id;
    const woman = mulheres.find(mulher => mulher.id == id);
    response.json(woman);
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});