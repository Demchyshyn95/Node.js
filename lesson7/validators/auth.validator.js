const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../config/regex');

module.exports = Joi.object({
    email: Joi.string().regex(EMAIL).required(),
    password: Joi.string().regex(PASSWORD).required(),
});
