export interface PersonDeveloperSkills {
    code: string;
    level: number;
    time_of_use: number;
}

export interface IdentificationData {
    pesel: number;
    nip: number;
    regon: number;
}

export interface Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    identification_data: IdentificationData;
    emails: string[];
    developer_skills: PersonDeveloperSkills[];
}

export class PersonFactory {
    public static create(data: Person): Person {
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
