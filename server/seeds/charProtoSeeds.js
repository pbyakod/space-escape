const {CharProto} = require('../models');

const charProto = [
  {
    id: 1,
    name: "Jeff Bezos",
    health: 1000,
    ship: 500,
    gold: 1000,
  },
  {
    id: 2,
    name: "Elon Musk",
    health: 1000,
    ship: 1000,
    gold: 500,
  },
  {
    id: 3,
    name: "Richard Branson",
    health: 1000,
    ship: 750,
    gold: 750,
  },
];

const seedCharProto = () => CharProto.bulkCreate(charProto);

module.exports = {seed: seedCharProto};