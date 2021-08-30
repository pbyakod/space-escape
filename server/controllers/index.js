const router = require('express').Router();
const apiRoutes = require('./api');
const asteroidsRoutes = require('./asteroids');

router.use('/api', apiRoutes);
router.use('/asteroids', asteroidsRoutes);

module.exports = router;