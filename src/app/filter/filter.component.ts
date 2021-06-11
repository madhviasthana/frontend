import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import { Filter1 } from '../filter1';
import { Filter2 } from '../filter2';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Department, employee } from '../model';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filter1: Filter1 = new Filter1();
  filter2: Filter2 = new Filter2();
  invoices: any;
  newchar = '';


  constructor(private http: HttpClient, private invoiceservice: InvoiceService, private router: Router) { }
  filteredData1!: Invoice[];
  filteredData2!: Invoice[];
  selected: any;
  cities: string[] = ['Indore', 'Delhi', 'Mumbai'];
  hotels: string[] = [];
  bills: string[] = ['FoodBill', 'TravelBill', 'Laundary'];
  indHotels: string[] = ['Sayaji', 'Shereton', 'Raddison'];
  delHotels: string[] = ['Leela', 'Lemon Tree', 'Themes'];
  MumHotels: string[] = ['Taj', 'Oberoi'];

  hotel!: any

  updateHotels() {

    switch (this.filter1.cityName) {

      case 'Indore':
        this.hotels = this.indHotels;
        break;
      case 'Delhi':
        this.hotels = this.delHotels;
        break;
      case 'Mumbai':
        this.hotels = this.MumHotels;
        break;

    }
  }


  ngOnInit(): void {

  }

  selectedHotel(selectedObject: any) {
    this.filter1.hotelName = selectedObject.target.value;
  }


  onSubmit() {

    if (Object.keys(this.filter2).length === 0) {
   
      this.invoiceservice.getFilteredList1(this.filter1).subscribe(data => {
        this.filteredData1 = data;
        this.invoiceservice.storePassedObject(this.filteredData1);
        this.router.navigate(['/filtered-invoices1'])

      })

    }


    else {
      console.log(this.filter2)
      console.log("service called");

      this.filter2.startDate = this.filter2.startDate.split('-').join(this.newchar)
      this.filter2.endDate = this.filter2.endDate.split('-').join(this.newchar)
      this.invoiceservice.getFilteredList2(this.filter2).subscribe(data => {
        this.filteredData2 = data;
        console.log(data);
        this.invoiceservice.storePassedObject(this.filteredData2);
        this.router.navigate(['/filtered-invoices2'])
      })
    }
  }



}

