const { Router } = require('express');
const { authControllers: { signOut, refreshToken, signIn } } = require('../controllers');
const {
    auth_validity, id_validity,
    middlewaresUsers: { getUserById },
    middlewaresAuth: { findUserByEmail, isPasswordValidity },
    refresh_token,
} = require('../middlewares');

const authrouter = Router();

authrouter.post('/signIn', auth_validity, findUserByEmail, isPasswordValidity, signIn);
authrouter.get('/signOut', signOut);
authrouter.post('/:id/refresh', id_validity, getUserById, refresh_token, refreshToken);

module.exports = authrouter;
