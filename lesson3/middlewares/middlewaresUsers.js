const fs = require('fs');
const path = require('path');

const pathUsers = path.join(process.cwd(), './dateBase/users.json');

module.exports = {
    createNewUser: ((req, res, next) => {
        try {
            const { email } = req.body;
            const errora = 'this email is already in use';
            const mistake = 'Ops...something went wrong';

            fs.readFile(pathUsers, ((err, data) => {
                if (err) {
                    res.render('error', { errora: mistake });
                    return;
                }

                const users = JSON.parse(data);
                const findUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
                if (!findUser) {
                    req.logined = true;
                    return next();
                }

                res.render('error', { errora });
            }
            ));
        } catch (e) {
            res.render('error', { errora: e });
        }
    }
    ),
    signIn: (req, res, next) => {
        try {
            const { email } = req.body;
            const errora = 'Incorrect Username or Email.';
            fs.readFile(pathUsers, ((err, data) => {
                if (err) {
                    const mistake = 'Ops...something went wrong';

                    res.render('error', { errora: mistake });
                    return;
                }

                const users = JSON.parse(data);
                const findUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

                if (findUser) {
                    req.user = findUser;
                    req.users = users;
                    req.logined = true;
                    return next();
                }

                res.render('error', { errora });
            }));
        } catch (e) {
            res.render('error', { errora: e });
        }
    },

    getUserByName: (req, res, next) => {
        try {
            const { body } = req;
            const { name } = body;

            const dontFind = 'Немає такого користувачa';

            fs.readFile(pathUsers, ((err, data) => {
                if (err) {
                    const mistake = 'Ops...something went wrong';

                    res.render('error', { errora: mistake });
                    return;
                }

                const users = JSON.parse(data);
                const user = users.find((user) => user.name.toLowerCase() === name.toLowerCase());
                const newUsers = users.filter((user) => user.name.toLowerCase() !== name.toLowerCase());

                if (user) {
                    req.users = newUsers;
                    req.user = user;
                    req.logined = true;
                    return next();
                }
                res.render('error', { errora: dontFind });
            }));
        } catch (e) {
            res.render('error', { errora: e });
        }
    },

    deleteUser: (req, res, next) => {
        const dontFind = 'Немає такого користувачa';
        try {
            const { name } = req.params;

            fs.readFile(pathUsers, ((err, data) => {
                if (err) {
                    const mistake = 'Ops...something went wrong';

                    res.render('error', { errora: mistake });
                    return;
                }

                const users = JSON.parse(data);
                const newUsers = users.filter((user) => user.name.toLowerCase() !== name.toLowerCase());
                const findUser = users.filter((user) => user.name.toLowerCase() === name.toLowerCase());

                if (findUser) {
                    req.users = newUsers;
                    req.logined = true;
                    return next();
                }
                res.render('error', { errora: dontFind });
            }));
        } catch (e) {
            res.render('error', { errora: e });
        }
    }
};
