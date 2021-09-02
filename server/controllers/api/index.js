const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const charProtoRoutes = require('./charProtoRoutes');
const encounterRoutes = require('./encounterRoutes');
const locationRoutes = require('./locationRoutes');


router.use('/encounter', encounterRoutes);
router.use('/location', locationRoutes);
router.use('/game', gameRoutes);
router.use('/user', userRoutes);
router.use('/charProto', charProtoRoutes);

module.exports = router;