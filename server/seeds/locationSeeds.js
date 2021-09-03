const { Location } = require("../models");

const locations = [
  {
    name: "p1",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p2",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p3",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p4",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p5",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p6",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p7",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p8",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "p9",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
];

const seed = () => Location.bulkCreate(locations);

module.exports = { seed };
