const {Location} = require('../models');

const locations = [
  {
    name: "p1",
    encounter_id: 1,
  },
  {
    name: "p2",
    encounter_id: 2,
  },
  {
    name: "p3",
    encounter_id: 3,
  },
  {
    name: "p4",
    encounter_id: 4,
  },
  {
    name: "p5",
    encounter_id: 5,
  },
  {
    name: "p6",
    encounter_id: 6,
  },
];

const seed = () => Location.bulkCreate(locations);

module.exports = {seed};