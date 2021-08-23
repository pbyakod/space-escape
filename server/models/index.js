const User = require('./User');
const Game = require('./Game');
const CharProto = require('./CharProto');
const Location = require('./Location');
const Encounter = require('./Encounter');

User.hasMany(Game, {
	foreignKey: 'user_id',
});

Game.belongsTo(User, {
  foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

CharProto.hasMany(Game, {
	foreignKey: 'char_proto_id',
})

Game.belongsTo(CharProto, {
  foreignKey: 'char_proto_id',
	onDelete: 'SET NULL'
});

Location.hasMany(Game, {
	foreignKey: 'location_id',
})

Game.belongsTo(Location, {
  foreignKey: 'location_id',
	onDelete: 'SET NULL'
});

Location.hasOne(Encounter, {
  foreignKey: 'location_id'
});

Encounter.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = { User, Game, CharProto, Location, Encounter};