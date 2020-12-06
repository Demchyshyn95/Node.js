const { usersService } = require('../services');

module.exports = {

    createNewUser: async ({ body }, res) => {
        try {
            const newUser = await usersService.createNewUser(body);

            res.status(201).json(newUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const newUsers = await (usersService.deleteUser(req, res));

            res.status(200).json(newUsers);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await usersService.getUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await usersService.getUserById(req, res);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUserById: async ({ body, params }, res) => {
        try {
            const user = await usersService.updateUserById(body, params);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
