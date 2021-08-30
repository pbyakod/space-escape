const router = require('express').Router();
const astroidRoutes = require('./astroidRoutes');

router.use('/', astroidRoutes);

module.exports = router;