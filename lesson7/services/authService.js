const db = require('../dataBase').getInstance();

module.exports = {
    createTokenPair: (tokenPair) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.create(tokenPair);
    },
    deleteToken: (accessToken) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.destroy({
            where: { access_token: accessToken }
        });
    },
    getTokenWithUserByParams: (findObject) => {
        const OAuthModel = db.getModel('O_Auth');
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            include: {
                model: OAuthModel,
                where: findObject
            }
        });
    },
    deleteTokenById: (id) => {
        const OAuthModel = db.getModel('O_Auth');

        return OAuthModel.destroy({
            where: { id }
        });
    }
};
