const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {};

Location.init(
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

		people: {
			type: DataTypes.STRING,
			allowNull: true
		},

		population: {
			type: DataTypes.INTEGER,
			allowNull: true
		},

		currency: {
			type: DataTypes.STRING,
			allowNull: true
		},

		leader: {
			type: DataTypes.STRING,
			allowNull: true
		}, 

		tradeable: {
			type: DataTypes.STRING,
			allowNull: true
		}, 

		abundance: {
			type: DataTypes.STRING,
			allowNull: true
		},

		fact: {
			type: DataTypes.TEXT,
			allowNull: true
		}, 

	},
	{
		sequelize,
		modelName: 'Location',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = Location;