const {Detail} = require('../models');

const details = [
	{
    id:1,
    name:"p1",
    encounter_id:1
    },
    {
      id:2,
      name:"p2",
      encounter_id:2,
      },
      {
        id:3,
        name:"p3",
        encounter_id:3
        },
        {
          id:4,
          name:"p4",
          encounter_id:4
          },
          {
            id:5,
            name:"p5",
            encounter_id:5
            },
            {
              id:6,
              name:"p6",
              encounter_id:6
              },

];

const seed = () => Detail.bulkCreate(details);

module.exports = seed;