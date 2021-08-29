const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_PW = process.env.JWT_PW;
const expiration = '30s';

const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
};

function signToken({id, username}) {
  return jwt.sign({ data: {id, username}}, JWT_PW, {expiresIn: expiration});
}

module.exports = {
  withAuth,
  signToken,
};
