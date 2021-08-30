const router = require('express').Router();
// const { withAuth } = require('../../utils/auth');

router.get('/home', async (req, res) => {
  try {
    res.sendFile('/AsteroidsTitle.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/start', async (req, res) => {
  try {
    res.sendFile('/AsteroidsStart.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
