const { usersService: { findUserEmail, getUserById } } = require('../services');

module.exports = {

    createNewUser: async ({ body }, res, next) => {
        try {
            const { email } = body;
            const user = await findUserEmail(email);

            user.length ? res.status(404).json('email already exists') : next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: async ({ params }, res, next) => {
        try {
            const { id } = params;

            if (id > 0 && id < 10) {
                const user = await getUserById(id);
                if (user.length) {
                    return next();
                }
                return res.status(404).json('don\'t found a user with this id');
            }
            res.status(404).json('incorrect id user_id(not less than 0 and not more than 10)');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async ({ params }, res, next) => {
        try {
            const { id } = params;

            if (id > 0 && id < 10) {
                const user = await getUserById(id);
                if (user.length) {
                    return next();
                }
                return res.status(404).json('don\'t found a user with this id');
            }
            res.status(404).json('incorrect id user_id(not less than 0 and not more than 10)');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
