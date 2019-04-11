export interface CompanyAddress {
    countryCode: string;
    state: string;
    city: string;
    zipCode: string;
    streetName: string;
    streetNumber: number;
}

export interface Company {
    id: number;
    name: string;
    address: CompanyAddress;
}
