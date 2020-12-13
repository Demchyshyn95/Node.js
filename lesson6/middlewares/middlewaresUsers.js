const { usersService: { findUserEmail, getUserById } } = require('../services');
const { ErrorHandler, errors: { ER_NOT_VALID_EMAIL, ER_NOT_FIND_USER_BY_ID } } = require('../Error');

module.exports = {

    createNewUser: async ({ body }, res, next) => {
        try {
            const { email } = body;
            const user = await findUserEmail(email);

            if (!user.length) {
                return next();
            }
            throw new ErrorHandler(ER_NOT_VALID_EMAIL.messege, ER_NOT_VALID_EMAIL.code);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async ({ params }, res, next) => {
        try {
            const { id } = params;

            const user = await getUserById(id);

            if (user.length) {
                return next();
            }
            throw new ErrorHandler(ER_NOT_FIND_USER_BY_ID.messege, ER_NOT_FIND_USER_BY_ID.code);
        } catch (e) {
            next(e);
        }
    },
};
