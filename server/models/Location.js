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
			allowNull: false
		},

		population: {
			type: DataTypes.INTEGER,
			allowNull: false
		},

		currency: {
			type: DataTypes.STRING,
			allowNull: false
		},

		leader: {
			type: DataTypes.STRING,
			allowNull: false
		}, 

		tradable: {
			type: DataTypes.STRING,
			allowNull: false
		}, 

		abundance: {
			type: DataTypes.STRING,
			allowNull: false
		},

		fact: {
			type: DataTypes.STRING,
			allowNull: false
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