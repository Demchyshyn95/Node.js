const { Router } = require('express');
const {
    usersControllers: {
        getUsers, updateUserById, deleteUserById,
        createdNewUser, getUserById_Car
    }
} = require('../controllers');
const {
    middlewaresUsers: { getUserById, createNewUser },
    access_token, user_validity, update_validity, id_validity
} = require('../middlewares');

const usersRouters = Router();

usersRouters.get('/', getUsers);
usersRouters.get('/:id', id_validity, getUserById, getUserById_Car);
usersRouters.post('/', user_validity, createNewUser, createdNewUser);
usersRouters.put('/:id', update_validity, access_token, getUserById, updateUserById);
usersRouters.delete('/:id', id_validity, getUserById, access_token, deleteUserById);

module.exports = usersRouters;
