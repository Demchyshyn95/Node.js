const { authService } = require('../services');
const tokenizer = require('../helpers/tokinizer');
const { N0_CONTENT } = require('../config/error-codes');
const { AUTHORIZATION } = require('../config/constans');

module.exports = {
    signIn: async (req, res, next) => {
        try {
            const [{ id }] = req.user;
            const tokens = tokenizer();

            await authService.createTokenPair({ user_id: id, ...tokens });

            res.json(tokens);
        } catch (e) {
            next(e);
        }
    },
    signOut: async (req, res, next) => {
        try {
            const accessToken = req.header(AUTHORIZATION);

            await authService.deleteToken(accessToken);

            res.send(N0_CONTENT);
        } catch (e) {
            next(e);
        }
    },
    refreshToken: async ({ user }, res, next) => {
        try {
            const { id } = user;
            await authService.deleteTokenById(id);

            const tokens = tokenizer();
            await authService.createTokenPair({ user_id: id, ...tokens });

            res.json(tokens);
        } catch (e) {
            next(e);
        }
    }
};
