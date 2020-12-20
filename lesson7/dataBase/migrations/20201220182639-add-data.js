module.exports = {
    up: async (queryInterface) => {
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
            },
            {
                id: 3,
                name: 'Igor',
                email: 'Igor1995@gmail.com',
                password: '1111'
            },
            {
                id: 4,
                name: 'Igor',
                email: 'Igor1995@gmail.com',
                password: '1111'
            },
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
            {
                id: 3,
                model: 'audi',
                years: 2020,
                users_id: 3
            },
            {
                id: 4,
                model: 'bmw',
                years: 2018,
                users_id: 4
            },
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', null, {});

        await queryInterface.bulkDelete('cars', null, {});
    }
};
