const { Encounter } = require('../models');

const encounter = [
  {
    story: "Thanks for the ride boss, I'm telling ya, I'm the best wingman. Ill communicate messages from the console.",
    message: "You’ve come across a asteroid belt. You must navigate your way through it",
    option1: 'Start Navigating|{"health": 0, "ship":0, "gold":0, "next": "minigame/asteroids", "next_location_id": 2}',
    option2: 'Go around and deplete resources|{"health": -100, "ship":-100, "gold":0, "next": "results", "next_location_id": 2}',
    location_id: 1,
  },
  {
    story: "That was not a fun time, looks like we've made it to Valumis though boss. I don't know much about them other that the saying that 'a ship build or repaired by Valuminions is a ship built to last'",
    message: "You've made it to Valumis, home of the Valuminions, you're greeted by a shipbuilder in his own ship showing off his work. He offers to improve and fix your ship in exchange for oxygen and gold. Would you like him to work on your ship?",
    option1: 'Yes|{"health": -150, "ship": +300, "gold": -150, "next": "results", "next_location_id": 3}',
    option2: 'No|{"health": 0, "ship":0, "gold":0, "next": "results", "next_location_id": 3}',
    location_id: 2,
  },
  {
    story: "Troy’s Traverse’, also known as the “Sahara of Space” is a trechorous area in space known for having no planets, or sentient life. Many trevellers have fallen victim to this barren stretch of space",
    message: "You’ve come across an abandoned ship, salvage for left behind gold.",
    option1: 'Start Salvaging|{"health": 0, "ship": 0, "gold": 0, "next": "minigame/salvage", "next_location_id": 4}',
    option2: 'Contue on without salvaging |{"health": 0, "ship":0, "gold":0, "next": "results", "next_location_id": 4}',
    location_id: 3,
  },
  {
    story:   "According to the radar we are entering Automatia, ruled by Alex Bateman. Alex Bateman is a long descendent of Nathan Bateman, born long after Earth was swallowed by the sun and after humans already moved to another galaxy. At some point he managed to find a planet of his own (habitable and rich in metal) where he made robots that would eventually build as many robots as there are now",
    message: "You’ve made it to Automatia! Metal for robot creation is worth its weight in gold here. Would you like to trade metal from your spaceship for gold?",
    option1:'Yes|{"health": 0, "ship": -300, "gold": +300, "next": "results", "next_location_id": 5}', 
    option2: 'No|{"health": 0, "ship": -0, "gold":0, "next": "results", "next_location_id": 5}',
    location_id: 4,
  },
  {
    story: "That was awesome, I've never seen so many robots on one planet!",
    message:"Heavy Solar winds are forecasted above, but high temperatures are expected on Automania due to it’s annual melting of old robot parts. Would you like to wait out the wind? Or venture on and escape the heat?",
    option1: 'Wait out the winds in the sweltering heat|{"health": -200, "ship": -10, "gold": -0, "next": "minigame/asteroids", "next_location_id": 6}',
    option2: 'Avoid the heat and face the winds|{"health": 0, "ship":0, "gold":0, "next": "results", "next_location_id": 7}',
    location_id: 5,
  },
  {
    story: "Prepare to land on Niburu! This is a great planet, ruled by the The Elohim.",
    message:"You’ve made it to Niburu. They are very welcoming and offer you food and any medical attention you need, would you like to accept their offer?",
    option1: 'Yes|{"health": +300, "ship": 0, "gold": 0, "next": "results", "next_location_id": 8}',
    option2: 'No|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 8}',
    location_id: 6,
  },
  {
    story:   "Get ready for a rough landing, those winds blew us way off course and the radar isn't detecting this planet. This doesn't look good!",
    message: "You have been approached by a mysterious figure, the Deman is unavoidable. your health is drained",
    option1: 'leave as soon as possible|{"health": -600, "ship": -100, "gold": 0, "next": "results", "next_location_id": 8}',
    option2: 'leave as soon as possible|{"health": -600, "ship": -100, "gold": 0, "next": "results", "next_location_id": 8}',
    location_id: 7,
  },
  {
    story: "Glad we made it to Peter's Pass, I was looking forward to checking this place out. A particularly scenic part of space, Peter’s Pass is littered with beautiful stars, and a black hole a safe distance away. Its beauty brings space travellers from all planets to visit and enjoy the breathtaking scenery.",
    message:"Oh no! It looks like your ship has incurred an infestation of space-mice (yes, mice do exist in space). They eat the componenets of your spaceship’s internal heater, and if left alone, your space ship will become unbearably cold. Kill the mice before your heat dissapears!",
    option1: 'Start capturing them|{"health": 0, "ship":0, "gold":0, "next": "minigame/whackMouse", "next_location_id": 9}',
    option2: 'let them be|{"health": -200, "ship": -300, "gold": 0, "next": "results", "next_location_id": 9}',
    location_id: 8,
  },
  {
    story: "If we hurry we can make it to Prastin! I know a good spot to fix up the ship when we get there!", 
    message: 'You’ve made it to Prastin, the birthpace of Serpent Growing. they offer you some repairs in exhange for oxygen, do you wish to make this trade?',
    option1: 'Yes|{"health": -200, "ship": +300, "gold": 0, "next": "results", "next_location_id": 10}',
    option2: 'No|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 10}',
    location_id: 9,
  },
  {
    story: "So let me tell you a little about these people. Prastians only have one love: Serpent Growing. Every year at the national Serpent Growing festival, each of the seven provinces send competitors in hopes of winning the national title. This nation, abundant in natural resources, has no need for any activity other than snake growing",
    message: 'A passionate Serpent Growing Prastinian approaches you and offers you the opportunity for a wager of oxygen (crucial for the ability to grow serpents in Oxygen-less Prastin). If you beat his score, you can double the amount of oxygen you put down. Do you wish to compete and wager for Oxygen?',
    option1: 'yes|{"health": 0, "ship": 0, "gold": 0, "next": "minigame/snake", "next_location_id": 11}',
    option2: 'no|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 11}',
    location_id: 10,
  },
  {
    story: "You have been approached by a stranger",
    message: 'Sir Isaac Henry Kentsworth IV, a seasoned explorer himself (in an endless search for the best Serpent Breeds, and Growing Techniques) informs you of of a shortcut that requires passing through a porthole owned by the Space Trolls. Avid fans of Trivia, a successful attempt at their trivia game allows passage that avoids a dangerous and hostile part of space, but be warned, failure will result in the loss of your ship. A deadly price. Which path do you wish to take?',
    option1: 'Take the shortcut|{"health": 0, "ship":0, "gold": 0, "next": "results", "next_location_id": 12}',
    option2: 'Go Around|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 14}',
    location_id: 11,
  },
  {
    story: "Im glad we took his advice, Ive never made it to Trolltopia this fast!",
    message: 'Terry The Terrible appears at the porthole gate singing a song “if you want to pass through the porthole you gotta pay the troll toll, you gotta pay the troll toll to get in. Troll Toll, or fly away, Troll Toll, Stay and Play, Troll Toll!',
    option1: 'Stay and Play|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 13}',
    option2: 'Fly away and take the long way around|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 14}',
    location_id: 12,
  },
  {
    story: "This place was founded by Space Trolls 7 million years ago. Their poor social skills and love of Trivia left this society extremely isolated. Without trade partners, they use spaceships of those who have failed their trivia games as their only source of transportation ",
    message: 'Press start to Begin Quiz',
    option1: 'Start|{"health": 0, "ship": 0, "gold": 0, "next": "minigame/trivia", "next_location_id": 19}',
    option2: 'Fly away and take the long way around|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 14}',
    location_id: 13,
  },
  {
    //may come after decline option from king (encounter 11)
  //may come after decline option from troll (encounter 12)
    story: "That was long, but I didn't trust that guy. Good call boss.",
    message: 'This is a dangerous part of space, no way around it anymore. Many expolorers choose to push their ships to the max to try and avoid Moon Pirates. Do you wish to do the same?',
    option1: 'Yes|{"health": 0, "ship": -250, "gold": 0, "next": "minigame/asteroids", "next_location_id": 16}',
    option2: 'Save my ship some wear and tear, and face the pirates|{"health": 0, "ship": -10, "gold": -10, "next": "results", "next_location_id": 15}',
    location_id: 14,
  },
  {   story: "uhh... Boss? We have a problem here...",
  message: 'Warning! a fleet of space pirates are attacking, what should we do?',
  option1: 'Fight back|{"health": 0, "ship": 0, "gold": 0, "next": "minigame/pirates", "next_location_id": 16}',
  option2: 'Push our ship to dangerous levels and get out of here|{"health": -100, "ship": -600, "gold": -0, "next": "results", "next_location_id": 16}',
  location_id: 15,
},
  {
    //comes after receiving negative values from encounter 14 or 15
    story: "I Have to park this puppy, lets stop here in Qiushuangalong",
    message: 'You’ve made it to Quishuang’s Planet. Luckily their currency has an exchange rate of 1/3 with gold. Would you like to pay for repairs?',
    option1: 'yes|{"health": 0, "ship": 0, "gold": 0, "next": "shop", "next_location_id": 17}',
    option2: 'no thanks|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 17}',
    location_id: 16,
  },
  {
    story: "A stranger approaches as you are in awe the magnificence of this planet.",
    message: 'Aware of their surroundings, the Space Force on Quishuang’s Planet is extremely well developed, and offer travellers the oportunity for an escorted trip to Terminus (the last stop before Earth) for 400 Gold, do you wish to take this trip?',
    option1: 'Take the escort|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 19}',
    option2: 'Forge on Alone|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 18}',
    location_id: 17,
  },
  {
    story: "Yeah, I dont need no escort, I AM the escort, no ones messing with this ship im in the driver's seat, boss! Um... actually... maybe I spoke too soon..",
    message: 'Oh no! you weren’t able to escape the Pirates and they’re coming for your ship! Shoot them before they get you!',
    option1: 'Fight back|{"health": 0, "ship": 0, "gold": 0, "next": "minigame/asteroids", "next_location_id": 19}',
    option2: 'Push our ship to dangerous levels and get out of here|{"health": -100, "ship": -600, "gold": -0, "next": "results", "next_location_id": 19}',
    location_id: 18,
  },
  {
    //may be after encounter 17 - escort takes to planet
    //may be after encounter 18 - pirates catch up
    story:
    "Well, that was exciting to say the least... Anyway, Last Stop before home according to the radar!",
    message: 'You’ve made it to Terminus. Their currency the Kyber Shard does not exhange for gold. Their leader Don Guerrera has however implemented a highly sophisticated system to trade Oxygen for Ship Armour, and the stretch to Earth has many obsticles along the way. Do you wish to trade?',
    option1: 'yes|{"health": -300, "ship": +300, "gold": 0, "next": "results", "next_location_id": 20}',
    option2: 'no|{"health": 0, "ship": 0, "gold": 0, "next": "results", "next_location_id": 20}',
    location_id: 19,
  },
  {
    story: "Lets Head Home!",
    message: 'You’ve made it to Pramav’s Pelters, a tiny galaxy of 50 tiny planets. Navegate through safely and you’re home free! ',
    option1: 'Begin Navigation|{"health": 0, "ship": 0, "gold": 0, "next": "minigame/pelters", "next_location_id": 21}',
    option2: 'go around|{"health": -200, "ship": -200, "gold": 0, "next": "results", "next_location_id": 21}',
    location_id: 20,
  },
];

const seedEncounter = () => Encounter.bulkCreate(encounter);

module.exports = { seed: seedEncounter };

