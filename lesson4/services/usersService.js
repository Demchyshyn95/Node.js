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
    },

    getUserById_Car: (userId) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            where: {
                id: userId
            },
            include: [{ model: UserModel, as: 'user' }]
        });
    }
};
