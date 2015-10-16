'use strict';

const koa = require('koa');

let app = koa();

app.use(function* () {
    this.body = 'bat users';
});

module.exports = app;