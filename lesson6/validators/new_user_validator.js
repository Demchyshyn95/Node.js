const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../config/regex');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50)
        .required(),
    email: Joi.string().regex(EMAIL).required(),
    password: Joi.string().regex(PASSWORD).required(),
});
