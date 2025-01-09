import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './models/invoice';
import { catchError, of } from 'rxjs';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule, MessagesModule, TableModule, InputTextModule, ButtonModule, CalendarModule],
  providers: [InvoiceService],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
  allInvoices: Invoice[] = [];
  messages?: Message[];
  rangeDates?: Date[];
  invoiceSearch?: string;
  filteredInvoices: Invoice[] = [];
  constructor(private _invoice: InvoiceService) { }
  ngOnInit() {
    this._invoice.getInvoices().pipe(
      catchError(() => {
        this.messages = [{ severity: 'error', detail: 'קרתה תקלה' }];
        return of();
      })
    ).subscribe(
      res => {
        this.allInvoices = res;
        this.filteredInvoices = this.allInvoices;
      }
    );
  }
  onSearch() {
    this.filteredInvoices = this.allInvoices?.filter(invoice => {
      let matchesInvoiceDate = true;
      if (this.rangeDates?.length &&this.rangeDates[0]&&this.rangeDates[1]) {
        let startDate = this.rangeDates[0];
        let endDate = this.rangeDates[1];
        let invoiceDate=invoice.date?new Date(invoice.date):new Date()
        matchesInvoiceDate =  invoiceDate>= startDate && invoiceDate <= endDate;
      }
      let matchesInvoiceName =
        !this.invoiceSearch ||
        invoice.invoiceName?.toLowerCase().includes(this.invoiceSearch?.toLowerCase());
      let matchesSupplierName =
        !this.invoiceSearch ||
        invoice.supplierNmae?.toLowerCase().includes(this.invoiceSearch.toLowerCase());

      return (matchesInvoiceName || matchesSupplierName) && matchesInvoiceDate;
    });
  }
}


