require('dotenv/config');

const config = {
  mongoUri: process.env.DATABASE_URI,
  port: process.env.PORT || 5000,
};

module.exports = config;
