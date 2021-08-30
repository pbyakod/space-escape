const router = require('express').Router();
const { CharProto } = require('../../models');
const { withAuth } = require('../../utils/auth');

router.use(withAuth);

router.get('/', async (req, res) => {
  try {
    const charProto = await CharProto.findAll();
    res.json(charProto);
  } catch (err) {
    res.json({ err });
  }
});

router.post('/create', withAuth, async (req, res) => {
  if (!req.body.name || !req.body.health || !req.body.ship || !req.body.gold) {
    res.status(400).end();
  }

  try {
    const character = await CharProto.create(req.body);

    res.status(200).json(character);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
