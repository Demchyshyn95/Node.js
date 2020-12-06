const db = require('../dataBase').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');
        return UserModel.findAll();
    },

    getUserById: ({ id }) => {
        const UserModel = db.getModel('User');

        return UserModel.findByPk(id);
    },

    createNewUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user);
    },

    deleteUser: ({ params }) => {
        const UserModel = db.getModel('User');
        const { id } = params;
        return UserModel.destroy({
            where: { id }
        });
    },

    updateUserById: (user, userId) => {
        const UserModel = db.getModel('User');
        return UserModel.update(user,
            {
                where: {
                    userId
                }
            });
    }
};
