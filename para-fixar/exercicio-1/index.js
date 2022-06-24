const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

recipes = [];
// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  // Comentando o next para observar o comportamento da aplicação
  // next();
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});