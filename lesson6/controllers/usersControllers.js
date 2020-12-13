const {
    usersService: {
        updateUserById, deleteUser, createNewUser, getUserById_Car, getUsers
    }
} = require('../services');
const { CREATED, N0_CONTENT, OK } = require('../config/error-codes');
const { hash } = require('../helpers/password.helper');

module.exports = {

    createdNewUser: async ({ body }, res, next) => {
        try {
            const password = await hash(body.password);
            const newUser = await createNewUser({ ...body, password });

            res.status(CREATED).json(newUser);
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async ({ params }, res, next) => {
        try {
            const newUsers = await deleteUser(params);

            res.status(N0_CONTENT).json(newUsers);
        } catch (e) {
            next(e);
        }
    },

    getUsers: async (req, res, next) => {
        try {
            const users = await getUsers();

            res.status(OK).json(users);
        } catch (e) {
            next(e);
        }
    },

    updateUserById: async ({ body, params }, res, next) => {
        try {
            const user = await updateUserById(body, params);
            res.status(OK).json(user);
        } catch (e) {
            next(e);
        }
    },

    getUserById_Car: async ({ params }, res, next) => {
        try {
            const user = await getUserById_Car(params);
            res.status(OK).json(user);
        } catch (e) {
            next(e);
        }
    }
};
