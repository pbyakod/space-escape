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
			references: {
				model: 'user',
				key: 'id'
			}
		},

		char_proto_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'char_proto',
				key: 'id'
			}
		},

    game_state_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'game_state',
				key: 'id'
			}
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