const { BAD_REQUEST } = require('../config/error-codes');

module.exports = {
    ER_NOT_VALID_ID: {
        messege: 'Incorrect user Id (not less than 0 and not more than 10)',
        code: BAD_REQUEST
    },
    ER_NOT_VALID_NAME: {
        messege: 'Incorrect user name',
        code: BAD_REQUEST
    },
    ER_NOT_VALID_PASSWORD: {
        messege: 'incorrect password',
        code: BAD_REQUEST
    },
    ER_NOT_VALID_EMAIL: {
        messege: 'email already exists',
        code: BAD_REQUEST
    },
    ER_NOT_FIND_USER_BY_ID: {
        messege: 'don\'t found a user with this id',
        code: BAD_REQUEST
    },

};
