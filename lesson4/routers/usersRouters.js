const { Router } = require('express');
const { usersControllers: { getUsers,updateUserById,deleteUser,createNewUser,getUserById_Car } } = require('../controllers');
const { middlewaresUsers: { getUserById,createNewUser,deleteUser } } = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', getUsers);
usersRouters.get('/:id', getUserById, getUserById_Car);
usersRouters.post('/', createNewUser, createNewUser);
usersRouters.put('/:id', deleteUser, updateUserById);
usersRouters.delete('/:id', deleteUser, deleteUser);

module.exports = usersRouters;
