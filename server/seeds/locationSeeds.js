const { Location } = require("../models");

const locations = [
  {
    name: "Denzal's Belt",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Biggest Meteor Belt in the known  Universe'
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
    people: 'Troy’s Traverse',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Troy’s Traverse’, also known as the “Sahara of Space” is a trechorous area in space known for having no planets, or sentient life. Many trevellers have fallen victim to this barren stretch of space.'
  },
  {
    name: "Automatia",
    people: 'Automatons',
    population: 5000000000,
    currency: 'Batemans',
    leader: 'Alex Bateman',
    tradable: 'Metals',
    abundance: 'Gold',
    fact: 'Alex Bateman is a long descendent Nathan Bateman, born long after Earth was swallowed by the sun and after humans already moved to another galaxy. At some point he managed to find a planet of his own (habitable and rich in metal) where he made robots that would eventually build as many robots as there are now.'
  },
  {
    name: "Automatia",
    people: 'Automatons',
    population: 5000000000,
    currency: 'Batemans',
    leader: 'Alex Bateman',
    tradable: 'Metals',
    abundance: 'Gold',
    fact: 'Alex Bateman is a long descendent Nathan Bateman, born long after Earth was swallowed by the sun and after humans already moved to another galaxy. At some point he managed to find a planet of his own (habitable and rich in metal) where he made robots that would eventually build as many robots as there are now.'
  },
  {
    name: "Unknown",
    people: 'Unknown',
    population: 0,
    currency: 'Human Life Force',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "Niburu",
    people: 'Elohim',
    population: 5500000,
    currency: 'mana',
    leader: 'El',
    tradable: 'Vitimin C supplements',
    abundance: 'Rocket Fuel',
    fact: 'Elohim have been to every planet'
  },
  {
    name: "Peter’s Pass",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'A particularly scenic part of space, Peter’s Pass is littered with beautuful stars, and a black hole a safe distance away. It’s beauty brings space travellers from all planets to visit and enjoy the breathtaking scenery'
  },
  {
    name: "Prastin",
    people: 'Prastinians',
    population: 7000000,
    currency: 'Gloons',
    leader: 'Sir Isaac Henry Kentsworth IV',
    tradable: 'Oxygen',
    abundance: 'Human Food',
    fact: 'Prastians only have one love: Serpent Growing. Every year at the national Serpent Growing festival, each of the seven provinces send compititors in hopes of winning the national title. This nation, abundant in nutrients, has no need for any activity other than snake growing'
  },  
  {
    name: "Prastin",
    people: 'Prastinians',
    population: 7000000,
    currency: 'Gloons',
    leader: 'Sir Isaac Henry Kentsworth IV',
    tradable: 'Oxygen',
    abundance: 'Human Food',
    fact: 'Prastians only have one love: Serpent Growing. Every year at the national Serpent Growing festival, each of the seven provinces send compititors in hopes of winning the national title. This nation, abundant in nutrients, has no need for any activity other than snake growing'
  },
  {
    name: "Prastin",
    people: 'Prastinians',
    population: 7000000,
    currency: 'Gloons',
    leader: 'Sir Isaac Henry Kentsworth IV',
    tradable: 'Oxygen',
    abundance: 'Human Food',
    fact: 'Prastians only have one love: Serpent Growing. Every year at the national Serpent Growing festival, each of the seven provinces send compititors in hopes of winning the national title. This nation, abundant in nutrients, has no need for any activity other than snake growing'
  },
  {
    name: "Troll Topia",
    people: 'Trolls',
    population: 10000,
    currency: 'None’',
    leader: 'Terry The Terrible',
    tradable: 'Space Ships',
    abundance: 'Safe Passage',
    fact: 'Founded by Space Trolls 7 million years ago, their poor social skills, and love of Trivia have led the society to be extremely isolated. Without trade partners, they use spaceships of those who have failed their trivia games as their only source of transportation'
  },
  {
    name: "Troll Topia",
    people: 'Trolls',
    population: 10000,
    currency: 'None’',
    leader: 'Terry The Terrible',
    tradable: 'Space Ships',
    abundance: 'Safe Passage',
    fact: 'Founded by Space Trolls 7 million years ago, their poor social skills, and love of Trivia have led the society to be extremely isolated. Without trade partners, they use spaceships of those who have failed their trivia games as their only source of transportation'
  },
  {
    name: "Quishuang’s Crecent’s",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'With thousands of moons in a small vicinity, this area in space is home to many Moon Pirates. Space Invaders who take ships for ransome.'
  },
  {
    name: "Quishuang’s Crecent’s",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'With thousands of moons in a small vicinity, this area in space is home to many Moon Pirates. Space Invaders who take ships for ransome.'
  },
  {
    name: "Quishuang’s Planet",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "Quishuang’s Planet",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    name: "Quishuang’s Crecent’s",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'With thousands of moons in a small vicinity, this area in space is home to many Moon Pirates. Space Invaders who take ships for ransome.'
  }, {
    name: "Terminus",
    people: 'Terminians',
    population: 400000,
    currency: 'Kyber Shards',
    leader: 'Don Guerrera',
    tradable: 'Oxygen Tanks',
    abundance: 'Ship Armour',
    fact: "Terminus orbits the galaxy's sun in a curved square orbit and the Laws of Physics don't apply here"
  }, {
    name: "Pranav’s Pelters",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Named after the great Explorer Pravav III, Pranav’s Pelters is a tiny galaxy filled with tiny planets'
  },
];

const seed = () => Location.bulkCreate(locations);

module.exports = { seed };
