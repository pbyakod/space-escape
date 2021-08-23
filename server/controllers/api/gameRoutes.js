const router = require('express').Router();
const {Game, CharProto, GameState, User} = require('../../models');
router.get('/:id', async (req, res) => {
  try {
    const games = await Game.findByPk(req.params.id, {
      include: [{
        model: GameState
      }]
    });
    res.json(games);
  } catch (err) {
    res.json({err});
  }
})
module.exports = router;