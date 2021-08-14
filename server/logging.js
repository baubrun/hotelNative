require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
const config = require('./config');

module.exports = function () {
  process.on('uncaughtException', ex => {
    try {
      winston.error(ex.message, ex).end();
    } catch (err) {
      process.exit(1);
    }
  });

  process.on('unhandledRejection', ex => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  winston.add(new winston.transports.MongoDB({db: config.mongoUri}));
};
