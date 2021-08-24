const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class CharProto extends Model {};

CharProto.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false
		},

		health: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

    ship: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

    gold: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'CharProto'
	}
);

module.exports = CharProto;