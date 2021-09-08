const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_PW = process.env.JWT_PW;
const expiration = '24h';

const test = (req, res, next) => {
  console.log('Test');
  next();
};

const withAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    let token = authHeader.split(' ')[1];

    try {
      const { data } = jwt.verify(token, JWT_PW);
      console.log(data);
      next();
    } catch(err) {
      res.status(401).json(err);
    }

  } else {
    res.status(401).json({err: 'Unauthorized'});
  }
};

function signToken({id, username}) {
  const token = jwt.sign({ data: {id, username}}, JWT_PW, {expiresIn: expiration});
  console.log(token);
  return token;
}

function decodeToken(token) {
  const decodedToken = jwt.decode(token)
  return decodedToken;
}
module.exports = {
  withAuth,
  signToken,
  decodeToken,
  test
};
