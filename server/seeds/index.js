const charProto = require('./charProtoSeeds');
const encounter = require('./encounterSeeds');
const game = require('./gameSeeds');
const gameState = require('./gameState');
const location = require('./locationSeeds');
const user = require('./userSeeds');
const sequelize = require('../config/connection');

async function seedDB() {
	await sequelize.sync({force: true});

	await charProto.seed();
	await encounter.seed();
	await location.seed();
	await user.seed();
	await gameState.seed();
	await game.seed();
}

seedDB();