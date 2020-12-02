const { Router } = require('express');
const { usersControllers } = require('../controllers');
const { middlewaresUsers } = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', usersControllers.getRegistPage);
usersRouters.post('/newUser', middlewaresUsers.createNewUser, usersControllers.createNewUser);
usersRouters.post('/getUser', middlewaresUsers.getUserByName, usersControllers.showUser);
usersRouters.post('/deleteUser', middlewaresUsers.deleteUser, usersControllers.deleteUser);

module.exports = usersRouters;
