'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const { logger } = require('../../utils');

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    logger.info(`Database connected: ${process.env.MONGO_URI}`);
  } catch (err) {
    logger.error(`Database connection error: ${err.message}, ${err}`);
    process.exit(1);
  }
};
