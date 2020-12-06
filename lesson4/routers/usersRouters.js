const { Router } = require('express');
const { usersControllers: {getUsers,updateUserById,deleteUser,createNewUser,getUserById_Car } } = require('../controllers');
const { middlewaresUsers } = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', getUsers);
usersRouters.get('/:id', middlewaresUsers.getUserById, getUserById_Car);
usersRouters.post('/', middlewaresUsers.createNewUser, createNewUser);
usersRouters.put('/:id', middlewaresUsers.deleteUser, updateUserById);
usersRouters.delete('/:id', middlewaresUsers.deleteUser, deleteUser);

module.exports = usersRouters;
