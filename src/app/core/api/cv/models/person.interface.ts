export interface IPersonDeveloperSkills {
    code: string;
    level: number;
    time_of_use: number;
}

export interface IIdentificationData {
    pesel: number;
    nip: number;
    regon: number;
}

export interface IPerson {
    id: number;
    name: string;
    surname: string;
    age: number;
    identification_data: IIdentificationData;
    emails: string[];
    developer_skills: IPersonDeveloperSkills[];
}

export class Person {
    public static factory(data: IPerson): IPerson {
        const person = {
            id: null,
            name: null,
            surname: null,
            age: null,
            identification_data: null,
            emails: [],
            developer_skills: []
        };
        return (data) ? {...person, ...data} : person;
    }
}
