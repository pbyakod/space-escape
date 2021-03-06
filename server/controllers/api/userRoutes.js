const { User, Game, CharProto, Location } = require('../../models');
const { signToken } = require('../../utils/auth');
const router = require('express').Router();

// GET user info
router.get("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const dbUserData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
    });
    return res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// GET user info with related games info
router.get("/details", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const dbUserData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Game,
          include: [
            {
              model: CharProto,
            },
            {
              model: Location,
            },
          ],
        },
      ],
      // order: [[Game, 'date_created', 'DESC']],
    });
    return res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// CREATE a new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);
    const { id, username, createdAt } = dbUserData;
    const token = signToken({ id, username });
    return res.status(200).json({
      user: {id, username}, 
      message: "You are now logged in!", 
      createdAt, 
      token});
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// login to an existing account
router.post("/login", async (req, res) => {
  if (!req.body) {
    return res.status(400).end();
  }

  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      return res.status(404).json({ message: "Cannot find user" });
    }

    // const isValidPass = await bcrypt.compare(req.body.password, user.password);
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const {id, username} = dbUserData;
		const token = signToken({id, username});
    res
      .status(200)
      .json({
        user: { id, username },
        message: "You are now logged in!",
        token,
      });
    return;
  } catch (err) {
    return res.status(500).json(err);
  }
});

// logout the current account and destroy the session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    return;
  } else {
    return res.status(404).end();
  }
});

module.exports = router;
