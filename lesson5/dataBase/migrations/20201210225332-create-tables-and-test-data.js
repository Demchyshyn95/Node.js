module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
        });

        await queryInterface.createTable('cars', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: Sequelize.STRING,
                allowNull: false
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            users_id: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'users',
                    as: 'user',
                    key: 'id'
                }
            }
        });

        await queryInterface.bulkInsert('users', [
            {
                id: 1,
                name: 'Andre',
                email: 'demchyshyn95@gmail.com',
                password: '12121'
            },
            {
                id: 2,
                name: 'Igor',
                email: 'Igor1995@gmail.com',
                password: '1111'
            }
        ],);

        await queryInterface.bulkInsert('cars', [
            {
                id: 1,
                model: 'opel',
                years: 2008,
                users_id: 1
            },
            {
                id: 2,
                model: 'audi',
                years: 2018,
                users_id: 2
            },
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('users');

        await queryInterface.dropTable('cars');

        await queryInterface.bulkDelete('users', null, {});

        await queryInterface.bulkDelete('cars', null, {});
    }
};
