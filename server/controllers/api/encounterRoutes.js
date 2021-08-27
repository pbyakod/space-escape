const router = require("express").Router();
const { Encounter, Location } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const encounter = await Encounter.findAndCountAll();
    res.json(encounter);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:location_id", async (req, res) => {
  if (!req.params.location_id) {
    res.status(400).end();
  }
  try {
    const encounter = await Encounter.findAll({
      include: {
        model: Location,
        where: {
          id: req.params.location_id
        }
      }
    });

    if (!encounter) {
      res.status(404).end();
    }
    res.json(encounter);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
