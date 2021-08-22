const User = require('./User')
const Game = require('./Game')
const CharProto = require('./CharProto')
const GameState = require('./GameState')
const Location = require('./Location')
const Encounter = require('./Encounter')

User.hasMany(Game, {
	onDelete: 'CASCADE',
});

Game.belongsTo(User, {
  foreignKey: 'user_id'
});

Game.hasMany(CharProto, {
  foreignKey: 'char_proto_id'
});

Game.hasOne(GameState, {
  foreignKey: 'game_state_id'
});

GameState.belongsTo(Game, {
  onDelete: 'CASCADE'
});

GameState.hasOne(Location, {
  foreignKey: 'location_id'
});

Location.hasOne(Encounter, {
  foreignKey: 'encounter_id'
})

module.exports = { User, Game, CharProto, GameState, Location, Encounter}