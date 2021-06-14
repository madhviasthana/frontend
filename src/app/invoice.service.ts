import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter1 } from './filter1';
import { Filter2 } from './filter2';
import { Invoice } from './invoice';
import { User } from './chat-window/chatmodel';



@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private baseURL ="http://localhost:9090";
  allPassedData!:Invoice[]
  // allPassedData2!: Invoice[]


  constructor(private httpClient : HttpClient) { }
  updateInvoiceDetails(id: number, remarks: string) {
    console.log(id);
    console.log(remarks);
    return this.httpClient.post(`${this.baseURL}/invoice-update/?invoiceNo=${id}&remark=${remarks}`, null);
  }

  
  sendMessage(chatMessage:User) {
    console.log("print message");
    return  this.httpClient.post<any>(this.baseURL+"/message", chatMessage).subscribe(
      res => {
        console.log(res);
      });


  }
 
  getFilteredList1(filter1:Filter1):Observable<Invoice[]>
  {
   
    return this.httpClient.post<Invoice[]>(`${this.baseURL}/filtered_invoices1/?cityName=${filter1.cityName}&hotelName=${filter1.hotelName}`,null);
   }

  getFilteredList2(filter2: Filter2): Observable<Invoice[]> {
    console.log("log in service")
    console.log(filter2);
    return this.httpClient.post<Invoice[]>(`${this.baseURL}/filtered_invoices2/?startDate=${filter2.startDate}&endDate=${filter2.endDate}`, null);
  }
  retrievePassedObject() {
    console.log(" in service");
    console.log(this.allPassedData)
    return this.allPassedData;

  }

  storePassedObject(passedData: any) {
    this.allPassedData = passedData;
    console.log("Data in Stored pass");
    console.log(this.allPassedData);

  }
  
  
  getinvoiceDetails(id: number): Observable<any> {
    console.log(id);
    return this.httpClient.get<Invoice>(`${this.baseURL}/invoices/${id}`);
  }
 
}
