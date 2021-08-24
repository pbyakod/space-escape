const { Encounter } = require('../models');

const encounter = [
  {
    message: 'Warning! we have detected incoming asteroids, what should we do?',
    option1: 'Go through (minigame)',
    option2: 'Go around (0 0 -100)',
    location_id: 1,
  },
  {
    message: 'Nice to Meet you! want to check out the shop?',
    option1: 'Check out the shop',
    option2: 'Leave',
    location_id: 2,
  },
  {
    message: 'Warning! We have detected intense radiation, what should we do?',
    option1: 'Go through (minigame)',
    option2: 'Go around (0 0 -100)',
    location_id: 3,
  },
  {
    message:
      'Warning! We have detected hungry Space Snakes, what should we do?',
    option1: 'Stay the Course (minigame)',
    option2: 'Go around (0 0 -100)',
    location_id: 4,
  },
  {
    message:
      'Warning! We have detected a black hole is pulling us in, what should we do?',
    option1: 'Go through (minigame)',
    option2: 'Go around (0 -100 -100)',
    location_id: 5,
  },
  {
    message: 'Help! Something, what should we do?',
    option1: 'Do something (minigame)',
    option2: 'Do nothing (0 0 -100)',
    location_id: 6,
  },
  {
    message:
      'Warning! Someone is being attacked by space monsters, what should we do?',
    option1: 'Help them (minigame)',
    option2: 'Ignore them (0 0 -100)',
    location_id: 7,
  },
  {
    message: 'Warning! a fleet of aliens are attacking, what should we do?',
    option1: 'Fight back (minigame)',
    option2: 'Run away (0 -100 -100)',
    location_id: 8,
  },
];

const seedEncounter = () => Encounter.bulkCreate(encounter);

module.exports = { seed: seedEncounter };
