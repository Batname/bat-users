'use strict';

/**
 * This file must be required at least ONCE.
 * After it's done, one can use require('mongoose')
 */

const mongoose = require('mongoose');
const config = require('config');

if (process.env.MONGOOSE_DEBUG) {
  mongoose.set('debug', true);
}

mongoose.connect(config.mongoose.uri, config.mongoose.options);

module.exports = mongoose;