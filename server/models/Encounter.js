const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Encounter extends Model {}

Encounter.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    story: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    option1: {
      type: DataTypes.STRING,
      allowNull: false
    },

    option2: {
      type: DataTypes.STRING,
      allowNull: false
    },

    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Location',
        key: 'id',
        unique: true
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'encounter',
    freezeTableName: true,
    underscored: true
  }
);

module.exports = Encounter;