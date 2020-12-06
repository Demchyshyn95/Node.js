const { Router } = require('express');
const { usersControllers: { getUsers, updateUserById, deleteUserById, createdNewUser, getUserById_Car } } = require('../controllers');
const { middlewaresUsers: { getUserById, createNewUser, deleteUser } } = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', getUsers);
usersRouters.get('/:id', getUserById, getUserById_Car);
usersRouters.post('/', createNewUser, createdNewUser);
usersRouters.put('/:id', deleteUser, updateUserById);
usersRouters.delete('/:id', deleteUser, deleteUserById);

module.exports = usersRouters;
