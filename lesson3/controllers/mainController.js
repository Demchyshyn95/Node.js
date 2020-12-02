module.exports = {
    getMainPage: (req, res) => {
        try {
            res.render('main');
        } catch (e) {
            res.render('error', { errora: e });
        }
    }
};
