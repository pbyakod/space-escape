const { User } = require('../../models');
const bcrypt = require('bcrypt');

const router = require('express').Router();

router.get('/', (req,res) => {
	res.json({message: 'Testing'});
})

router.post('/login', async (req,res) => {
	if (!req.body) {
		res.status(400).end();
	}

	try {
		const user = await User.findOne({
			where: {
				username: req.body.username,
			}
		});

		if (!user) {
			res.status(404).json({message: 'Cannot find user'});
		}

		const isValidPass = await bcrypt.compare(req.body.password, user.password);

		if (isValidPass) {
			console.log('Logged in')

			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.username = user.username;
				console.log(req.session)
			})
		} else {
			console.log('Invalid username or password');
		}

		res.status(200).json(user);
	} catch(err) {
		console.log(err)
	}
})

module.exports = router;