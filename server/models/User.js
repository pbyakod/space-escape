const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
	checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
};

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
			beforeBulkCreate: async (newUsers) => {
				for (const newUser of newUsers) {
					newUser.username = newUser.username.trim();
					newUser.password = await bcrypt.hash(newUser.password, 10);
				}
			},
			beforeCreate: async (newUser) => {
				newUser.username = newUser.username.trim();
				newUser.password = await bcrypt.hash(newUser.password, 10);
			},
			beforeUpdate: async (updatedUserData) => {
				updatedUserData.username = updatedUserData.username.trim();
				updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
			}
		}
	}
);

module.exports = User;