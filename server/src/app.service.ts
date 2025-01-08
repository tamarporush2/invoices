import { Injectable } from '@nestjs/common';
import { Invoice } from './models/Invoice';

@Injectable()
export class AppService {
  readonly invoicesList:Invoice[]=[
{
  description : "יום צילום",
  invoiceName: 'צילום',
  id: '1',
  date: new Date(1/1/2001),
  supplierNmae: 'ירון זומר'
} ,
{
  description : "יום אפייה",
  invoiceName: 'אפייה',
  id: '2',
  date: new Date(1/1/2002),
  supplierNmae: 'ליאור חזן'
} ,
{
  description : "גיבוש הצוות",
  invoiceName: 'חווית עובד',
  id: '3',
  date: new Date(1/3/2001),
  supplierNmae: 'אפי מאפים'
} ,
{
  description : "תנור למטבח",
  invoiceName: 'תחזוקה',
  id: '4',
  date: new Date(1/1/2020),
  supplierNmae: 'מחסני חשמל'
} ,
{
  description : "ארוחת צהריים במשרד",
  invoiceName: 'אוכל',
  id: '5',
  date: new Date(1/1/2012),
  supplierNmae: 'חומוס אליהו'
} ,{
  description : "חדוש רהיטים",
  invoiceName: 'שיפוץ',
  id: '6',
  date: new Date(1/1/2019),
  supplierNmae: 'איקאה'
} 

 ]
  getInvoices(): Invoice[] {
    return this.invoicesList; 
  }
}
