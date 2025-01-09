import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Observable } from 'rxjs';
import { Invoice } from './models/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _http:HttpClient ) {   
   }
   getInvoices():Observable<Invoice[]>{
   return this._http.get<Invoice[]>(environment?.apiUrl);
  }
}
