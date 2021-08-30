const router = require('express').Router();

router.get('/home', withAuth, async (req, res) => {
  try {
    res.sendFile('/AstroidsTitle.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/start', withAuth, async (req, res) => {
  try {
    res.sendFile('/AstroidsStart.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
