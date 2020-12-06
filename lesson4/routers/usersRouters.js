const { Router } = require('express');
const { usersControllers } = require('../controllers');
const { middlewaresUsers } = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', usersControllers.getUsers);
usersRouters.get('/:id', middlewaresUsers.getUserById, usersControllers.getUserById);
usersRouters.post('/', middlewaresUsers.createNewUser, usersControllers.createNewUser);
usersRouters.put('/:id', middlewaresUsers.deleteUser, usersControllers.updateUserById);
usersRouters.delete('/:id', middlewaresUsers.deleteUser, usersControllers.deleteUser);

module.exports = usersRouters;
