const router = require('express').Router();
const asteroidRoutes = require('./asteroidRoutes');

router.use('/', asteroidRoutes);

module.exports = router;
