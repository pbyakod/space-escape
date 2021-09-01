const router = require('express').Router();
const { withAuth } = require('../../utils/auth');
const path = require('path');

// router.get('/home', withAuth, async (req, res) => {
router.get('/home', async (req, res) => {
  try {
  res.sendFile('asteroids/AsteroidsHome.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/prepare', withAuth, async (req, res) => {
router.get('/prepare', async (req, res) => {
  try {
  res.sendFile('asteroids/AsteroidsPrepare.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
