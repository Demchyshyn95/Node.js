module.exports = {
    middlewaresUsers: require('./userMiddlewares/middlewaresUsers'),
    middlewaresAuth: require('./authMiddlewares/middlewaresAuth'),
    access_token: require('./authMiddlewares/check-access-token.middleware'),
    refresh_token: require('./authMiddlewares/check-refresh-token.middleware'),
    user_validity: require('./user-validity'),
    update_validity: require('./update-validity'),
    id_validity: require('./id-validity'),
    auth_validity: require('./auth-validity'),
};
