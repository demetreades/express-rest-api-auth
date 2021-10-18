'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const logger = require('../../utils/logger');

module.exports = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    logger.info(`Database connected: ${db.connection.host}`);
  } catch (err) {
    logger.error(`Database connection error: ${err.message}, ${err}`);
    process.exit(1);
  }
};
