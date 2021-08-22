const router = require('express').Router();
const gameStateRoutes = require('./gameStateRoutes');
const leaderBoardRoutes = require('./leaderBoardRoutes');
const obstacleRoutes = require('./obstacleRoutes');
const resultRoutes = require('./resultRoutes');
const scoreRoutes = require('./scoreRoutes');
const storyRoutes = require('./storyRoutes');

router.use('/gameState', gameStateRoutes);
router.use('/leaderBoard', leaderBoardRoutes);
router.use('/obstacle', obstacleRoutes);
router.use('/result', resultRoutes);
router.use('score', scoreRoutes);
router.use('story', storyRoutes);

module.exports = router;