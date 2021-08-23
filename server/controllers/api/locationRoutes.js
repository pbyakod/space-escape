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

module.exports = router;