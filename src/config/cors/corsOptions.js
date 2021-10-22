'use strict';

const { StatusCodes } = require('http-status-codes');
const { BaseError } = require('../../utils');
const { allowed } = require('./allowedOrigins');

module.exports = {
  corsOptions: {
    origin: (origin, callback) => {
      if (allowed.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(
          new BaseError(StatusCodes.UNAUTHORIZED, 'Not allowed by CORS')
        );
      }
    },
    optionsSuccessStatus: StatusCodes.OK,
  },
};

// module.exports = {
//   origin: 'http://localhost:3000',
//   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//   credentials: true,
//   preflightContinue: false,
//   optionsSuccessStatus: 200,
// };
