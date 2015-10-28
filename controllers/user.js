'use strict';

const render = require('./render');

const mongoose = require('mongoose'),
      _ = require('lodash'),
      User = require('../models/user');

function renderMainPage(options) {
    return function* () {
        this.body = 'main user page';
    }
}

function getUserById(options) {

    return function*(id, next) {

        if (!mongoose.Types.ObjectId.isValid(id)) {
          this.throw(404);
        }

        this.userById = yield User.findById(id);

        if (!this.userById) {
          this.throw(404);
        }

        yield* next;
    };
}

function getUsers(options) {
    return function* () {

        let users = yield User.find({}).lean();

        yield render.index(users, 'list.dust');
        
    }
}

function createUser(options) {
    return function* () {
        let user = yield User.create(this.request.body);
        this.body = _.pick(user.toObject(), [ 'displayName', 'email', 'created' ]);
    }
}

function getUser(options) {
    return function* () {
        this.body = _.pick(this.userById.toObject(), [ 'displayName', 'email', 'created' ]);
    }
}

function updateUser(options) {
    return function* () {
        let user;

        yield this.userById.update({ $set: { displayName: this.request.body.displayName }});
        user = yield User.findById(this.userById._id);
        this.body = _.pick(user.toObject(), [ 'displayName', 'email', 'created' ]);
    }
}

function deleteUser(options) {
    return function* () {
        yield this.userById.remove({});
        this.body = 'ok';
    }
}

exports.renderMainPage = renderMainPage;
exports.getUserById = getUserById;
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
