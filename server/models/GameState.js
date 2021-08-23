const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class GameState extends Model {};

GameState.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		health: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

		ship: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

    currency: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

    location_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'location',
				key: 'id'
			}
		},

    inProgress: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'game_state',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = GameState;