export interface ICompanyAddress {
    countryCode: string;
    state: string;
    city: string;
    zipCode: string;
    streetName: string;
    streetNumber: number;
}

export interface ICompany {
    id: number;
    name: string;
    address: ICompanyAddress;
}
