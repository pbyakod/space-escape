const router = require('express').Router();
// const { withAuth } = require('../../utils/auth');

router.get('/home', async (req, res) => {
  try {
    res.sendFile('/AstroidsTitle.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/start', async (req, res) => {
  try {
    res.sendFile('/AstroidsStart.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
