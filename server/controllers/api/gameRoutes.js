const router = require('express').Router();
const { User, Game, Location, CharProto, Encounter } = require('../../models');
const { withAuth, decodeToken } = require('../../utils/auth');

router.use(withAuth);

//GET all games
router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password']
          }
        }
      ]
    });

    if (!games) {
      res.status(404).end();
    }

    res.status(200).json(games);
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
})

// GET all games associated to user with user_id
router.get('/:user_id', async (req, res) => {
  if (!req.params.user_id) {
    res.status(400).end();
  }

  try {
    const games = await Game.findAll({
      where:{
        user_id: req.params.user_id
      },
      include: {
        model: Location,
        include: {
          model: Encounter
        }
      },
    });

    if (!games) {
      res.status(404).end();
    }

    res.status(200).json(games);
  } catch(err) {
    res.status(500).end();
  }
});

// CREATE a new game
router.post('/', async (req, res) => {
  try {
    const dbGameData = await Game.create({
      inProgress: true,
      ...req.body
    });
    res.status(200).json(dbGameData);
  } catch (err) {
    console.log(err);
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
router.put('/:id', async (req, res) => {
  try {
    let dbGameData = await Game.findByPk(req.params.id);
    if (!dbGameData) {
      res.status(400).json({ message: 'No game found with that id!' });
      return;
    } else if (
      dbGameData.get({ plain: true }).user_id !== req.body.user_id
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
    console.log(err)
    res.status(500).json({err});
  }
});

// DELETE an existing game with id === req.params.id
router.delete('/:id', async (req, res) => {
  const decodedToken = decodeToken(req.headers.authorization.split(' ')[1]);
  try {
    let dbGameData = await Game.findByPk(req.params.id);
    if (!dbGameData) {
      res.status(400).json({ message: 'No game found with that id!' });
      return;
    } else if (
      dbGameData.get({ plain: true }).user_id !== decodedToken.data.id
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
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;