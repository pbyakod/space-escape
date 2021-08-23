const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},

		username: {
			type: DataTypes.STRING,
			allowNull: false
		},

    password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		modelName: 'user',
		freezeTableName: true,
		underscored: true
	}
);

module.exports = User;