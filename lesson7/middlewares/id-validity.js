const { id_validate } = require('../validators');
const { ErrorHandler } = require('../Error');
const { BAD_REQUEST } = require('../config/error-codes');

module.exports = (req, res, next) => {
    try {
        const { id } = req.params;
        const { error } = id_validate.validate(id);

        if (error) throw new ErrorHandler(error.details[0].message, BAD_REQUEST);

        next();
    } catch (e) {
        next(e);
    }
};
