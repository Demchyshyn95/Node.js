const express = require('express');
const db = require('./dataBase').getInstance();

const app = express();
db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { usersRouters } = require('./routers');

app.use('/', usersRouters);

app.listen(5000, () => {
    console.log('Server 5000');
});
