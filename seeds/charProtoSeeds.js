const {CharProto} = require('../models');

const charProto = [
	
  {
    id: 1,
    username: "Jeff Besos",
    health: 1000,
    ship: 500,
    gold: 1000
 },
 {
  id: 2,
  username: "Elon Muck",
  health: 1000,
  ship: 1000,
  gold: 500
},
{
  id: 3,
  username: "Richard Richardson",
  health: 1000,
  ship: 750,
  gold: 750
},
];

const seedCharProto = () => CharProto.bulkCreate(charProto);

module.exports = seedCharProto;