const router = require('express').Router();
const companyRouter = require('./api/company.routes');

router.use('/api/company', companyRouter);

module.exports = router;
