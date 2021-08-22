const { Game } = require("../models");

const game = [
  {
    id: 1,
    user_id: 1,
    char_proto_id: 1,
    game_state_id: 1,
  },
  {
    id: 2,
    user_id: 2,
    char_proto_id: 2,
    game_state_id: 2,
  },
  {
    id: 3,
    user_id: 3,
    char_proto_id: 3,
    game_state_id: 3,
  },
  {
    id: 4,
    user_id: 4,
    char_proto_id: 1,
    game_state_id: 4,
  },
  {
    id: 5,
    user_id: 5,
    char_proto_id: 2,
    game_state_id: 5,
  },
  {
    id: 6,
    user_id: 6,
    char_proto_id: 3,
    game_state_id: 6,
  },
];

const seedGame = () => Game.bulkCreate(game);

module.exports = seedGame;
