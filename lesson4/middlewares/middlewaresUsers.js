const { usersService } = require('../services');

module.exports = {

    createNewUser: async ({ body }, res, next) => {
        try {
            const { email } = body;
            const users = await usersService.getUsers();

            users.forEach((user) => {
                user.email.toLowerCase() === email.toLowerCase() ? res.status(404).json('email already exists') : next();
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const { id } = req.params;
            req.id = id;

            (id > 0 && id < 10) ? next() : res.status(404).json('incorrect id user_id(not less than 0 and not more than 10)');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async ({ params }, res, next) => {
        try {
            const { id } = params;
            const users = await usersService.getUsers();

            const findUser = users.find((user) => user.id == id);

            findUser ? next() : res.status(404).json('don\'t found a user with this id');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
