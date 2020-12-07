const { usersService:{ updateUserById, deleteUser, createNewUser, getUserById_Car, getUsers} } = require('../services');

module.exports = {

    createdNewUser: async ({ body }, res) => {
        try {
            const newUser = await createNewUser(body);

            res.status(201).json(newUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUserById: async ({ params }, res) => {
        try {
            const newUsers = await deleteUser(params);

            res.status(200).json(newUsers);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await getUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUserById: async ({ body, params }, res) => {
        try {
            const user = await updateUserById(body, params);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById_Car: async ({ params }, res) => {
        try {
            const user = await getUserById_Car(params);
            res.json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
