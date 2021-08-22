const {Detail} = require('../models');

const details = [
	{
		id:1,
health:100,
ship:200,
currency:300,
location_id:1,
inProgress:true
},
{
  id:2,
health:100,
ship:200,
currency:300,
location_id:2,
inProgress:true
},
{
  id:3,
health:100,
ship:200,
currency:300,
location_id:3,
inProgress:true
},
{
  id:4,
health:100,
ship:200,
currency:300,
location_id:4,
inProgress:true
},
{
  id:5,
health:100,
ship:200,
currency:300,
location_id:5,
inProgress:true
},
{
  id:6,
health:100,
ship:200,
currency:300,
location_id:6,
inProgress:true
},

];

const seed = () => Detail.bulkCreate(details);

module.exports = seed;