module.exports = (client, DataTypes) => {
    const Car = client.define(
        'Сar',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: DataTypes.STRING,
                allowNull: false
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false
            },
        },
        {
            tableName: 'cars',
            timestamps: false
        }
    );

    const User = require('./User')(client, DataTypes);
    Car.belongsTo(User, {
        foreignKey: 'user_id', as: 'user', onUpdate: 'CASCADE', onDelete: 'CASCADE'
    });

    return Car;
};
