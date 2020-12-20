const { compare } = require('../../helpers/password.helper');
const { ErrorHandler, errors: { WRONG_EMAIL_OR_PASS } } = require('../../Error');

const { usersService: { findUserEmail } } = require('../../services');

module.exports = {
    findUserByEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await findUserEmail(email);

            if (!user.length) {
                throw new ErrorHandler(WRONG_EMAIL_OR_PASS.message, WRONG_EMAIL_OR_PASS.code);
            }
            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

    isPasswordValidity: async (req, res, next) => {
        try {
            const { password } = req.body;
            const [{ password: userPass }] = req.user;
            await compare(password, userPass);

            next();
        } catch (e) {
            next(e);
        }
    },
};
