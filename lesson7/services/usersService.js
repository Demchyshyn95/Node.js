const db = require('../dataBase').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    createNewUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user);
    },

    deleteUser: ({ id }) => {
        const UserModel = db.getModel('User');

        return UserModel.destroy({
            where: { id }
        });
    },

    updateUserById: (user, { id }) => {
        const UserModel = db.getModel('User');

        return UserModel.update(user,
            {
                where: {
                    id
                }
            });
    },

    getUserById_Car: ({ id }) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            attributes: { exclude: ['user_id'] },
            where: { user_id: id },
            include: [{ model: UserModel, as: 'user' }]
        });
    },

    findUserEmail: (email) => {
        const UserModel = db.getModel('User');
        return UserModel.findAll({
            where: { email }
        });
    },

    getUserById: (id) => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({
            where: { id }
        });
    },
};
