'use strict';

// open mongo db connection
require('./utils/mongoose');

const koa = require('koa');
const _ = require('lodash');
const userRouter = require('./router');
const localConfig = require('./config');

let app = koa(),
    middlewares;

// load middlewares
middlewares = _.sortBy(localConfig.middlewares, 'priority');

middlewares.forEach( middleware =>  {
  app.use(require('./middlewares/' + middleware.name));
});

// load routers
app.use(userRouter.routes());

app.use(function* () {
    this.status = 404;
    this.body = 'Not found1';
});

module.exports = app;