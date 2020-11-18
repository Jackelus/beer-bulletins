const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const router = require('./router');

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
    app.listen(PORT, '0.0.0.0');
    console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
  } catch (e) {
    console.error('Error connecting to the db', e); // eslint-disable-line no-console
  }
})();
