const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {};

Game.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

		char_proto_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

    game_state_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'game',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = Game;