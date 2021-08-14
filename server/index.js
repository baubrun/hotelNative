const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const winston = require('winston');
const logging = require('./logging');
const roomRoutes = require('./routes/rooms');

const PORT = config.port;
const options = {
  dbName: 'HotelNative',
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/* =======================
Middleware
=========================*/
logging();
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cors());

app.use('/rooms/', roomRoutes);

/* =======================
Mongoose
=========================*/
mongoose
  .connect(config.mongoUri, options)
  .then(
    app.listen(PORT, () => {
      winston.info('\nConnected to DB!\n');
      winston.info('\nServer running on port:', PORT, '\n');
    }),
  )
  .catch(err => winston.error(err));

mongoose.set('useFindAndModify', false);
