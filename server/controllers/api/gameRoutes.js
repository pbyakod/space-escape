const router = require('express').Router();
const { User, Game, Location, CharProto, Encounter } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE a new game
router.post('/', withAuth, async (req, res) => {
  try {
    const dbGameData = await Game.create({
      user_id: req.session.userId,
      inProgress: true,
      ...req.body
    });
    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET info of game id === req.params.id
router.get('/:id', async (req, res) => {
  try {
    const dbGameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password'],
          },
        },
        {
          model: Location
        },
        {
          model: CharProto,
        },
      ],
    });
    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE an existing game with id === req.params.id
router.put('/:id', withAuth, async (req, res) => {
  try {
    let dbGameData = await Game.findByPk(req.params.id);
    if (!dbGameData) {
      res.status(400).json({ message: 'No game found with that id!' });
      return;
    } else if (
      dbGameData.get({ plain: true }).user_id !== req.session.userId
    ) {
      res
        .status(400)
        .json({ message: 'Sorry you cannot edit the game with that id!' });
    } else {
      dbGameData = await Game.update(
        {
          ...req.body
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ message: 'Updated successfully!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE an existing game with id === req.params.id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    let dbGameData = await Game.findByPk(req.params.id);
    if (!dbGameData) {
      res.status(400).json({ message: 'No game found with that id!' });
      return;
    } else if (
      dbGameData.get({ plain: true }).user_id !== req.session.userId
    ) {
      res
        .status(400)
        .json({ message: 'Sorry you cannot delete the game with that id!' });
    } else {
      dbGameData = await Game.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ message: 'Delete the game successfully!' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;