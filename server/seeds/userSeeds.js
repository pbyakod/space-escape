const { User } = require("../models");

const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
  },
  {
    id: 4,
    username: "user4",
    password: "password4",
  },
  {
    id: 5,
    username: "user5",
    password: "password5",
  },
  {
    id: 6,
    username: "user6",
    password: "password6",
  },
];

const seedUser = () => User.bulkCreate(users);

module.exports = {seed: seedUser};
