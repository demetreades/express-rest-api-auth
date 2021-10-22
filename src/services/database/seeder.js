'use strict';

const fs = require('fs');
const dbConnection = require('./connection');
const { logger } = require('../../utils');
const User = require('../models/User');

dbConnection();

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/DATA/users.json`, 'utf-8')
);

const importData = async () => {
  try {
    await User.deleteMany();

    await User.create(...users);

    logger.info(users);
    logger.info('\n\nDATA IMPORTED\n');

    process.exit();
  } catch (err) {
    logger.error(`SEEDER ERROR: ${err}\n`);
    process.exit(1);
  }
};

const cleanData = async () => {
  try {
    await User.deleteMany();

    logger.info('\n\nData deleted!\n');
    process.exit();
  } catch (err) {
    logger.error(`SEEDER ERROR: ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-del') {
  cleanData();
} else {
  importData();
}
