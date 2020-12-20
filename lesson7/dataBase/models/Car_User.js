module.exports = (client, DataTypes) => {
    const Car_User = client.define(
        'Car_User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            },
            car_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true
            }
        },
        {
            tableName: 'сar_user',
            timestamps: false
        }
    );

    return Car_User;
};
