const router = require('express').Router();
const {CharProto} = require('../../models');

router.get('/', async (req,res) => {
	try {
		const charProto = await CharProto.findAll();
		res.json({charProto});
	} catch(err) {
		res.json({err});
	}	
});


module.exports = router;