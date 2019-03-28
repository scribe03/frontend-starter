export const mockPerson = () => [
    {
        id: 1,
        name: 'Adam',
        surname: 'Bielan',
        age: 45,
        identification_data: {
            pesel: 123123123,
            nip: 345345,
            regon: 45646456
        },
        emails: ['adam.bielan@wp.pl'],
        developer_skills: [
            {
                code: 'LANG_PHP',
                level: 3,
                time_of_use: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Anna',
        surname: 'Bocian',
        age: 45,
        identification_data: {
            pesel: 222333444,
            nip: 6777755,
            regon: 777222333
        },
        emails: ['anna.bocian@wp.pl'],
        developer_skills: [
            {
                code: 'LANG_PHP',
                level: 3,
                time_of_use: 1
            }
        ]
    }
];
