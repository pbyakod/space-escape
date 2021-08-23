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
				model: 'User',
				key: 'id',
				unique: false
			}
		},

		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'Location',
				key: 'id',
				unique: false
			}
		},

		char_proto_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'CharProto',
				key: 'id',
				unique: false
			}
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

		inProgress: {
			type: DataTypes.BOOLEAN,
			allowNull: false
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