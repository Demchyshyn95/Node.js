const express = require('express');
const db = require('./dataBase').getInstance();

const app = express();
db.setModels();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { usersRouters, authRouter } = require('./routers');

app.use('', usersRouters);
app.use('/auth', authRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.code || 500)
        .json({
            messege: err.message
        });
});

app.listen(5000, () => {
    console.log('Server 5000');
});
