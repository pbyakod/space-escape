const { Location } = require("../models");

const locations = [
  {
    // 1
    name: "Biggest Belt",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Biggest Meteor Belt in the known  Universe'
  },
  {
    // 2
    name: "Valumis",
    people: 'Valuminions',
    population: 5000000,
    currency: 'Valuma',
    leader: 'King Valamin',
    tradable: 'Oxygen',
    abundance: 'Ship Building and repair',
    fact: 'Isolated in space between two enormous natural barriers, the Valuminions are increadibly experienced and skilled navigators and ship builders. With few natural resources, they rely heavily on trade with other planets, and use their navigation skills and ship building expertise to help captain voyages and build ships for wealthir planets. Around 70% of all ships in the known universe have been constructed in some part by Valuminions'
  },
  {
    // 3
    name: "p3",
    people: 'Treacherous Traverse',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Treacherous Traverse’, also known as the “Sahara of Space” is a treacherous area in space known for having no planets, or sentient life. Many trevellers have fallen victim to this barren stretch of space.'
  },
  {
    // 4
    name: "Automatia",
    people: 'Automatons',
    population: 5000000,
    currency: 'Batemans',
    leader: 'Alex Bateman',
    tradable: 'Metals',
    abundance: 'Gold',
    fact: 'Alex Bateman is a long descendent Nathan Bateman, born long after Earth was swallowed by the sun and after humans already moved to another galaxy. At some point he managed to find a planet of his own (habitable and rich in metal) where he made robots that would eventually build as many robots as there are now.'
  },
  {
    // 5
    name: "Automatia",
    people: 'Automatons',
    population: 5000000,
    currency: 'Batemans',
    leader: 'Alex Bateman',
    tradable: 'Metals',
    abundance: 'Gold',
    fact: 'Alex Bateman is a long descendent Nathan Bateman, born long after Earth was swallowed by the sun and after humans already moved to another galaxy. At some point he managed to find a planet of his own (habitable and rich in metal) where he made robots that would eventually build as many robots as there are now.'
  },
  {
    // 6
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
    // 7
    name: "Burini",
    people: 'Eimina',
    population: 5500000,
    currency: 'mana',
    leader: 'El',
    tradable: 'Vitimin C supplements',
    abundance: 'Rocket Fuel',
    fact: 'Eimina have been to every planet'
  },
  {
    // 8
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
    // 9
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
    // 10
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
    // 11
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
    // 12
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
    // 13
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
    // 14
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
    // 15
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
    // 16
    name: "Dotris",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    // 17
    name: "Dotris",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: ''
  },
  {
    // 18
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
    // 19
    name: "Terminus",
    people: 'Terminians',
    population: 400000,
    currency: 'Kyber Shards',
    leader: 'Don Guerrera',
    tradable: 'Oxygen Tanks',
    abundance: 'Ship Armour',
    fact: "Terminus orbits the galaxy's sun in a curved square orbit and the Laws of Physics don't apply here"
  }, 
  {
    // 20
    name: "Pranav’s Pelters",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Named after the great Explorer Pravav III, Pranav’s Pelters is a tiny galaxy filled with tiny planets'
  },{
    // 21
    name: "Home",
    people: '',
    population: 0,
    currency: '',
    leader: '',
    tradable: '',
    abundance: '',
    fact: 'Welcome home!'
  },

];

const seed = () => Location.bulkCreate(locations);

module.exports = { seed };
