import dotenv from 'dotenv';
dotenv.config();

const config = {
  mongoUri: process.env.DATABASE_URI,
  domain: process.env.DOMAIN, // domain ip address
  port: process.env.PORT || 5000,
};

export default config;
