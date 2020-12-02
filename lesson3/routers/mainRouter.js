const { Router } = require('express');
const { mainController } = require('../controllers');

const mainRouter = Router();

mainRouter.get('/', mainController.getMainPage);

module.exports = mainRouter;
