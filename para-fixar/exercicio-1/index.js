const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

recipes = [];
// ...
app.post('/recipes',
function (req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

  next(); // 2
},

function (req, res) { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});