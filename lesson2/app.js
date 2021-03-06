const express = require('express');
const expressHandlebars = require('express-handlebars');
const fs = require('fs');
const path = require('path');

const pathViews = path.join(process.cwd(), 'views');
const pathUsers = path.join(process.cwd(), './users.json');
let logined = false;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', '.hbs');
app.engine('.hbs', expressHandlebars({ defaultLayout: false }));
app.set('views', pathViews);

app.get('/', ((req, res) => {
    res.render('main');
}));

app.get('/signUp', ((req, res) => {
    res.render('signUp');
}));

app.post('/signUp', (({ body }, res) => {
    const { email, name } = body;
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
            logined = true;
            users.push(body);
            const newUsers = JSON.stringify(users);

            fs.writeFile(pathUsers, newUsers, (err1) => {
                if (err1) {
                    res.render('error', { errora: mistake });
                }
            });

            res.render('users', { users, name, logined });
            return;
        }

        res.render('error', { errora });
    }
    ));
}
));

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', (({ body }, res) => {
    const { email } = body;
    const errora = 'Incorrect Username or Email.';

    fs.readFile(pathUsers, ((err, data) => {
        if (err) {
            const mistake = 'Ops...something went wrong';

            res.render('error', { errora: mistake });
            return;
        }

        const users = JSON.parse(data);
        const findUser = users.find((user) => user.email === email);

        if (findUser) {
            const { name } = findUser;
            logined = true;
            res.render('users', { users, name, logined });
            return;
        }

        res.render('error', { errora });
    }));
}));

app.listen(3000, () => {
    console.log('Server 3000');
});
