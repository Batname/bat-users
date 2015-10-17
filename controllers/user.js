'use strict';

function renderMainPage(options) {
    return function* () {
        this.body = 'main user page';
    }
}

function getUsers(options) {
    return function* () {
        this.body = 'users list';
    }
}

function createUser(options) {
    return function* () {
        this.body = 'create new user';
    }
}

function getUser(options) {
    return function* () {
        this.body = 'get user by id';
    }
}

function updateUser(options) {
    return function* () {
        this.body = 'update user';
    }
}

function deleteUser(options) {
    return function* () {
        this.body = 'delete user';
    }
}

exports.renderMainPage = renderMainPage;
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
