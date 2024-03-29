import { CustomersAddress } from "./customerAddress";

export interface Customers {
    id?: string;
    name: string;
    email: string;
    cpfOrCnpj: string;
    phone: string;
    birthDay: string;
    createdDate?: string;
    address: CustomersAddress;
}