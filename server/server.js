const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '../client/build')));
// }

app.use(routes);

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => `Listening: http://localhost${PORT} 🚀`);
});