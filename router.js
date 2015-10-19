'use strict';

const Router = require('koa-router');
const userController = require('./controllers/user');

let router = new Router();

router.get('/users', userController.renderMainPage());
router.param('userId', userController.getUserById());
router.get('/users/list', userController.getUsers());
router.post('/users/new', userController.createUser());
router.get('/users/user/:userId', userController.getUser());
router.put('/users/user/:userId', userController.updateUser());
router.delete('/users/user/:userId', userController.deleteUser());

module.exports = router;