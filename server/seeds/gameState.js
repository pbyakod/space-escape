const {GameState} = require('../models');

const games = [
	{
		health:100,
		ship:200,
		currency:300,
		location_id:1,
		inProgress:true
	},
	{
		health:100,
		ship:200,
		currency:300,
		location_id:2,
		inProgress:true
	},
	{
		health:100,
		ship:200,
		currency:300,
		location_id:3,
		inProgress:true
	},
	{
		health:100,
		ship:200,
		currency:300,
		location_id:4,
		inProgress:true
	},
	{
		health:100,
		ship:200,
		currency:300,
		location_id:5,
		inProgress:true
	},
	{
		health:100,
		ship:200,
		currency:300,
		location_id:6,
		inProgress:true
	},
];

const seed = () => GameState.bulkCreate(games);

module.exports = {seed};