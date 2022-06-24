module.exports = (req, res, next) => {
  const { data: { warrantyPeriod } } = req.body;
  if (warrantyPeriod === undefined) {
    return res.status(400).json(
      { message: 'O campo warrantyPeriod é obrigatório' },
    );
  }
  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json(
      { message: 'O campo warrantyPeriod não é um período válido' },
    );
  }
  next();
};