const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1
app.use(bodyParser.json());

app.get('/', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}