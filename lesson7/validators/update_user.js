const Joi = require('joi');
const { EMAIL, PASSWORD } = require('../config/regex');

module.exports = Joi.object({
    email: Joi.string().regex(EMAIL),
    password: Joi.string().regex(PASSWORD),
    age: Joi.number().integer().min(13).max(120),
});
