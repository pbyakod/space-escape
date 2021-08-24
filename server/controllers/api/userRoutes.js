const { User, Game, CharProto, Location } = require("../../models");
const router = require("express").Router();

// GET user info
router.get("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const dbUserData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE a new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.get({ plain: true }).id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login to an existing account
router.post("/login", async (req, res) => {
  if (!req.body) {
    res.status(400).end();
  }

  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(404).json({ message: "Cannot find user" });
    }

    // const isValidPass = await bcrypt.compare(req.body.password, user.password);
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Invalid username or password" });
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.get({ plain: true }).username;
      req.session.userId = dbUserData.get({ plain: true }).id;
      console.log(req.session);
      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err), res.status(500).json(err);
  }
});

// logout the current account and destroy the session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
