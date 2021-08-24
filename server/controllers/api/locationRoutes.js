const router = require('express').Router();
const { Location, Encounter } = require('../../models');

router.get('/', async (req,res) => {
	try {
		const location = await Location.findAndCountAll();
		res.json(location);
	} catch(err) {
		res.json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
	  const location = await Location.findByPk(req.params.id, {
			include: {
				model: Encounter
			}
		});

		req.session.save(() => {
			req.session.locationId = location.id
		})

	  res.json(location);
	} catch(err) {
	  res.json(err);
	}
});


module.exports = router;
