const router = require('express').Router();
const apiRoutes = require('./api');
const astroidsRoutes = require('./astroids');

router.use('/api', apiRoutes);
router.use('/astroids', astroidsRoutes);

module.exports = router;