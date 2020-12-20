const { new_user_validator } = require('../validators');
const { ErrorHandler } = require('../Error');
const { BAD_REQUEST } = require('../config/error-codes');

module.exports = (req, res, next) => {
    try {
        const { error } = new_user_validator.validate(req.body);

        if (error) {
            throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
        }

        next();
    } catch (e) {
        next(e);
    }
};
