const {Location} = require('../models');

const locations = [
  {
    name: "p1",
  },
  {
    name: "p2",
  },
  {
    name: "p3",
  },
  {
    name: "p4",
  },
  {
    name: "p5",
  },
  {
    name: "p6",
  },
];

const seed = () => Location.bulkCreate(locations);

module.exports = {seed};