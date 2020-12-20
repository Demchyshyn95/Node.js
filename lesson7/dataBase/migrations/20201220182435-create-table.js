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

        await queryInterface.createTable('сar_user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true
            },
            car_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'cars',
                    as: 'car',
                    key: 'id'
                }
            }
        });

        await queryInterface.createTable('o_auth', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            access_token: {
                type: Sequelize.STRING,
                allowNull: false
            },
            refresh_token: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'users',
                    as: 'user',
                    key: 'id'
                }
            },
            created_at: {
                type: Sequelize.DATE,
                default: Sequelize.NOW
            }
        });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('users');

        await queryInterface.dropTable('cars');

        await queryInterface.dropTable('car_user');

        await queryInterface.dropTable('o_auth');
    }
};
