const { Router } = require('express');
const { usersControllers } = require('../controllers');
const { middlewaresUsers } = require('../middlewares');

const signInRouter = Router();

signInRouter.get('/', usersControllers.signInPage);
signInRouter.post('/', middlewaresUsers.signIn, usersControllers.singInUser);

module.exports = signInRouter;
