const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const validateProductName = require('./middlewares/validateProductName');
const validateInfo = require('./middlewares/validateInfo');
const validateSaleDate = require('./middlewares/validateSaleDate');
const validateWarranty = require('./middlewares/validateWarranty');

const app = express();
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: 'missing fields' });
    }

    const token = crypto.randomBytes(8).toString('hex');

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});

app.post('/sales',
  validateProductName,
  validateInfo,
  validateSaleDate,
  validateWarranty,
  (req, res) => res.status(201).json({ message: 'Sale created successfully!' }));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});