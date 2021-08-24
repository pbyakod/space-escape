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

module.exports = router;