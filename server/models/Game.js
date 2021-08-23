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
				key: 'id',
				unique: false
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'game'
	}
);

module.exports = Game;