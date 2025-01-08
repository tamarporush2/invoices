import { Invoice } from './models/Invoice';
export declare class AppService {
    readonly invoicesList: Invoice[];
    getInvoices(): Invoice[];
}
