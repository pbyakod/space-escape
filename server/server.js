const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const expSession = require('express-session');
const path = require('path');

const SequilizeStore = require('connect-session-sequelize')(expSession.Store);

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
// }


const sess = {
  secret: process.env.sessPw,
  cookie: {maxAge: (30 * 60 * 1000)},
  resave: false,
  saveUnitialized: true,
  store: new SequilizeStore({
    db: sequelize
  })
};

app.use(expSession(sess));
app.use(routes);



sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => `Listening: http://localhost${PORT} 🚀`);
});