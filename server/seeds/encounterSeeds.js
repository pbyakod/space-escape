const { Encounter } = require('../models');

const encounter = [
  {
    message: 'Warning! we have detected incoming asteroids, what should we do?',
    option1: 'Go Through|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 2}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": "2"}',
    location_id: 1,
  },
  {
    message: 'Warning! we have detected incoming aliens, what should we do?',
    option1: 'Go Through|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 3}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 3}',
    location_id: 2,
  },
  {
    message: 'Nice to Meet you! want to check out the shop?',
    option1: 'Check out the shop|{"health": 10, "ship": 10, "gold": 10, "next": "results", "next_location_id": "4"}',
    option2: 'Leave|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 4}',
    location_id: 3,
  },
  {
    message: 'Warning! We have detected intense radiation, what should we do?',
    option1:'Go Through|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 5}', 
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 5}',
    location_id: 4,
  },
  {
    message:
      'Warning! We have detected hungry Space Snakes, what should we do?',
    option1: 'Stay the Course|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 6}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 6}',
    location_id: 5,
  },
  {
    message:
      'Warning! We have detected a black hole is pulling us in, what should we do?',
    option1: 'Go Through|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 7}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 7}',
    location_id: 6,
  },
  {
    message: 'Help! Something, what should we do?',
    option1: 'Do something|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 8}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 8}',
    location_id: 7,
  },
  {
    message:
      'Warning! Someone is being attacked by space monsters, what should we do?',
    option1: 'Help them|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 9}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 9}',
    location_id: 8,
  },
  {
    message: 'Warning! a fleet of aliens are attacking, what should we do?',
    option1: 'Fight back|{"health": 0, "ship": -10, "gold": -10, "next": "minigame/asteroids", "next_location_id": 10}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 10}',
    location_id: 9,
  },
];

const seedEncounter = () => Encounter.bulkCreate(encounter);

module.exports = { seed: seedEncounter };
