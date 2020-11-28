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

    fs.readFile(pathUsers, ((err, data) => {
        const users = JSON.parse(data);
        const findUser = users.find((user) => user.email === email);

        if (!findUser) {
            logined = true;
            users.push(body);
            const newUsers = JSON.stringify(users);
            fs.writeFile(pathUsers, newUsers, (err1) => console.log(err1));
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
