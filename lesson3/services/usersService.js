const fs = require('fs');
const path = require('path');

const pathUsers = path.join(process.cwd(), './dataBase/users.json');
const mistake = 'Ops...something went wrong';

module.exports = {
    createNewUser: (user, logined, res) => {
        const { name } = user;

        fs.readFile(pathUsers, ((err, data) => {
            if (err) {
                res.render('error', { errora: mistake });
                return;
            }

            const users = JSON.parse(data);
            users.push(user);
            const newUsers = JSON.stringify(users);

            fs.writeFile(pathUsers, newUsers, (err1) => {
                if (err1) {
                    res.render('error', { errora: mistake });
                }
            });

            res.render('users', {
                users, user, name, logined
            });
        }
        ));
    },

    findedUser: ({ users, user, logined }, res) => {
        const { name } = user;
        res.render('users', { users, name, logined });
    },

    deleteUser: ({ users, logined }, res) => {
        fs.writeFile(pathUsers, JSON.stringify(users), (err1) => {
            if (err1) {
                res.render('error', { errora: err1 });
            }

            res.render('users', { users, logined });
        });
    }
};
