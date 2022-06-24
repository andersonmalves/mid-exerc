const express = require('express');
const bodyParser = require('body-parser');

const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarranty = require('./middlewares/validateWarranty');

const app = express();
app.use(bodyParser.json());

/* Comentei esse bloco de código e substitui pelo próximo
app.post('/sales', validateProductName, validateInfo, validateSaleDate, (req, res) => (
  res.status(201).json({ message: 'Sale created successfully!' })
));
*/

app.post('/sales',
  validateProductName,
  validateInfo,
  validateSaleDate,
  validateWarranty,
  (req, res) => res.status(201).json({ message: 'Sale created successfully!' }));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});