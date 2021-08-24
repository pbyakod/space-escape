const router = require('express').Router();
const leaderBoardRoutes = require('./leaderBoardRoutes');
const obstacleRoutes = require('./obstacleRoutes');
const resultRoutes = require('./resultRoutes');
const scoreRoutes = require('./scoreRoutes');
const storyRoutes = require('../storyRoutes');
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const charProtoRoutes = require('./charProtoRoutes');


router.use('/encounter', encounterRoutes);
router.use('/location', locationRoutes);
router.use('/game', gameRoutes);
router.use('/user', userRoutes);
router.use('/charProto', charProtoRoutes);

module.exports = router;