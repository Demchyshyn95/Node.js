const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../../config/config');
const { AUTHORIZATION } = require('../../config/constans.js');
const { ErrorHandler, errors } = require('../../Error');
const { authService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const access_token = req.get(AUTHORIZATION);

        if (!access_token) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        jwt.verify(access_token, ACCESS_TOKEN_SECRET, (err) => {
            if (err) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }
        });

        const userWithToken = await authService.getTokenWithUserByParams({ access_token });

        if (!userWithToken) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        if (userWithToken.id !== +req.params.id) {
            throw new ErrorHandler(errors.PERMISSION.message, errors.PERMISSION.code);
        }

        next();
    } catch (e) {
        next(e);
    }
};
