'use strict';

const koa = require('koa');
const userRouter = require('./router');

let app = koa();

// load middlewares

// load routers
app.use(userRouter.routes());

app.use(function* () {
    this.body = 'bat users';
});

module.exports = app;