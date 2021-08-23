const router = require('express').Router();
const { Location } = require('../../models');

router.get('/', (req,res) => {
	try {
		const location = await Location.findAndCountAll();
		res.json({ location });
	} catch(err) {
		res.json({ err });
	}
})

router.get('/:id', async (req, res) => {
	try {
	  const locationID = await Location.findByPk(req.params.id, {
		include: [{
		  model: Location
		}]
	  });
	  res.json({ locationID });
	} catch(err) {
	  res.json({ err });
	}
})

module.exports = router;