'use strict';

const Router = require('koa-router');
const userController = require('./controllers/user');

let router = new Router();

router.get('/users', userController.renderMainPage());
router.get('/users/list', userController.getUsers());
router.post('/users/new', userController.createUser());
router.get('/users/user/:id', userController.getUser());
router.put('/users/user/:id', userController.updateUser());
router.delete('/users/user/:id', userController.deleteUser());

module.exports = router;