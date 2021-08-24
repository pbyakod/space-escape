const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

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
		underscored: true,
		hooks: {
			beforeBulkCreate: async (loginData) => {
				for (const login of loginData) {
					login.username = login.username.toLowerCase();
					login.password = await bcrypt.hash(login.password, 10);
				}
			},
			beforeCreate: async (login) => {
				login.username = login.username.toLowerCase();
				login.password = await bcrypt.hash(login.password, 10);
			},
			beforeUpdate: async (login) => {
				login.username = login.username.toLowerCase();
				login.password = await bcrypt.hash(login.password, 10);
			}
		}
	}
);

module.exports = User;