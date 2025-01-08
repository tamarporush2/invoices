"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.invoicesList = [
            {
                description: "יום צילום",
                invoiceName: 'צילום',
                id: '1',
                date: new Date(1 / 1 / 2001),
                supplierNmae: 'ירון זומר'
            },
            {
                description: "יום אפייה",
                invoiceName: 'אפייה',
                id: '2',
                date: new Date(1 / 1 / 2002),
                supplierNmae: 'ליאור חזן'
            },
            {
                description: "גיבוש הצוות",
                invoiceName: 'חווית עובד',
                id: '3',
                date: new Date(1 / 3 / 2001),
                supplierNmae: 'אפי מאפים'
            },
            {
                description: "תנור למטבח",
                invoiceName: 'תחזוקה',
                id: '4',
                date: new Date(1 / 1 / 2020),
                supplierNmae: 'מחסני חשמל'
            },
            {
                description: "ארוחת צהריים במשרד",
                invoiceName: 'אוכל',
                id: '5',
                date: new Date(1 / 1 / 2012),
                supplierNmae: 'חומוס אליהו'
            }, {
                description: "חדוש רהיטים",
                invoiceName: 'שיפוץ',
                id: '6',
                date: new Date(1 / 1 / 2019),
                supplierNmae: 'איקאה'
            }
        ];
    }
    getInvoices() {
        return this.invoicesList;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map