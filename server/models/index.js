const User = require('./User');
const Game = require('./Game');
const CharProto = require('./CharProto');
const GameState = require('./GameState');
const Location = require('./Location');
const Encounter = require('./Encounter');

User.hasMany(Game, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

Game.belongsTo(User, {
  foreignKey: 'user_id'
});

Game.hasMany(CharProto, {
  foreignKey: 'char_proto_id',
	constraints: false
});

// CharProto.belongsTo(Game, {
// 	foreignKey: 'char_proto_id',
// })

Game.hasOne(GameState, {
  foreignKey: 'game_state_id',
	constraints: false
});

// GameState.belongsTo(Game, {
// 	foreignKey: 'game_state_id',
//   onDelete: 'CASCADE',
// 	constraints: false
// });

GameState.hasOne(Location, {
  foreignKey: 'location_id',
	constraints: false
});


Location.hasOne(Encounter, {
  foreignKey: 'encounter_id',
	constraints: false
});

module.exports = { User, Game, CharProto, GameState, Location, Encounter};