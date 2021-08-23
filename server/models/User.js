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
			allowNull: false,
			unique: true
		},

    password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: /^[A-Za-z]\w{6,14}$/
      },
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