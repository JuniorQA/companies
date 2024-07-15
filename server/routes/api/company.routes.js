const router = require('express').Router();

const { Company } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const companies = await Company.findAll();
    // отправляем ответ
    return res.json({
      success: true,
      companies,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const company = await Company.findOne({ where: { id } });

    if (company) {
      try {
        await Company.destroy({
          where: { id },
        });
        return res.sendStatus(204);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
      }
    }

    return res.status(400).json({ message: 'Не получается удалить компанию' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { title, address } = req.body;
  //
  try {
    const newCompany = await Company.create({
      title,
      address,
    });
    if (newCompany) {
      return res.json(newCompany);
    }
    return res.status(400).json({ message: 'Ошибка при создании компании' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
