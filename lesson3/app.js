const express = require('express');
const expressHandlebars = require('express-handlebars');

const path = require('path');
const { usersRouters, mainRouter, signInRouter } = require('./routers');

const pathViews = path.join(process.cwd(), 'views');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', '.hbs');
app.engine('.hbs', expressHandlebars({ defaultLayout: false }));
app.set('views', pathViews);

app.use('/', mainRouter);

app.use('/signUp', usersRouters);

app.use('/signIn', signInRouter);

app.listen(3000, () => {
    console.log('Server 3000');
});
