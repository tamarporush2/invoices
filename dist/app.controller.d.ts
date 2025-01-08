import { AppService } from './app.service';
import { Invoice } from './models/Invoice';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getInvoices(): Invoice[];
}
