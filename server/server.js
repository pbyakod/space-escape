const express = require('express');

const app = express();

const PORT = 5000;

app.listen(PORT, () =>(`Listening: http://localhost${PORT} 🚀`))