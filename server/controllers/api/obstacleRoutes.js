const router = require('express').Router();
const { Encounter } = require('../../models');

router.get('/', (req,res) => {
	try {
		const encounter = await Encounter.findAndCountAll();
		res.json({ encounter });
	} catch(err) {
		res.json({ err });
	}
})

router.get('/:id', async (req, res) => {
	try {
	  const encounterID = await Encounter.findByPk(req.params.id, {
		include: [{
		  model: Encounter
		}]
	  });
	  res.json({ encounterID });
	} catch(err) {
	  res.json({ err });
	}
})

module.exports = router;