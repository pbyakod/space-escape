const { Game } = require("../models");

const games = [
  {
    user_id: 1,
    char_id: 1,
		health:100,
		ship:200,
		gold: 300,
		location_id:1,
		inProgress:true
  },
  {
    user_id: 2,
    char_id: 2,
		health:100,
		ship:200,
		gold: 300,
		location_id:2,
		inProgress:true
  },
  {
    user_id: 3,
    char_id: 3,
		health:100,
		ship:200,
		gold: 300,
		location_id:3,
		inProgress:true
  },
  {
    user_id: 4,
    char_id: 1,
		health:100,
		ship:200,
		gold: 300,
		location_id:4,
		inProgress:true
  },
  {
    user_id: 5,
    char_id: 2,
		health:100,
		ship:200,
		gold: 300,
		location_id:5,
		inProgress:true
  },
  {
    user_id: 6,
    char_id: 3,
		health:100,
		ship:200,
		gold: 300,
		location_id:6,
		inProgress:true
  },
];

const seedGame = () => Game.bulkCreate(games);

module.exports = {seed: seedGame};
