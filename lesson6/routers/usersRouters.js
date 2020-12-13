const { Router } = require('express');
const {
    usersControllers: {
        getUsers, updateUserById, deleteUserById, createdNewUser, getUserById_Car
    }
} = require('../controllers');

const { middlewaresUsers: { getUserById, createNewUser }, user_validity, update_validity, id_validiti } = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', getUsers);
usersRouters.get('/:id', id_validiti, getUserById, getUserById_Car);
usersRouters.post('/', user_validity, createNewUser, createdNewUser);
usersRouters.put('/:id', update_validity, getUserById, updateUserById);
usersRouters.delete('/:id', getUserById, deleteUserById);

module.exports = usersRouters;
