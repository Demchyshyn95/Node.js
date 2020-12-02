const { usersService } = require('../services');

module.exports = {

    getRegistPage: (req, res) => {
        try {
            res.render('SignUp');
        } catch (e) {
            res.render('error', { errora: e });
        }
    },

    createNewUser: ({ body, logined }, res) => {
        try {
            usersService.createNewUser(body, logined, res);
            res.status(201).json('User crated');
        } catch (e) {
            res.render('error', { errora: e });
        }
    },
    signInPage: (req, res) => {
        try {
            res.render('signIn');
        } catch (e) {
            res.render('error', { errora: e });
        }
    },
    singInUser: (req, res) => {
        try {
            usersService.findedUser(req, res);
        } catch (e) {
            res.render('error', { errora: e });
        }
    },
    showUser: (req, res) => {
        try {
            usersService.findedUser(req, res);
        } catch (e) {
            res.render('error', { errora: e });
        }
    },
    deleteUser: (req, res) => {
        try {
            usersService.deleteUser(req, res);
        } catch (e) {
            res.render('error', { errora: e });
        }
    }

};
