const router = require("express").Router();
const { Location, Encounter } = require("../../models");
const { withAuth } = require("../../utils/auth");

router.use(withAuth);

router.get("/", async (req, res) => {
  try {
    const location = await Location.findAndCountAll();
    res.json(location);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id, {
      include: {
        model: Encounter,
      },
    });
    res.json(location);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
