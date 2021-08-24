const router = require("express").Router();
const { Encounter } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const encounter = await Encounter.findAndCountAll();
    res.json(encounter);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const encounter = await Encounter.findByPk(req.params.id);
    res.json(encounter);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
