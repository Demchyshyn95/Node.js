module.exports = {
    access_token: require('./check-access-token.middleware'),
    refresh_token: require('./check-refresh-token.middleware'),
    auth: require('./middlewaresAuth')
};
