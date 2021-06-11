import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice'
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-my-component',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices!: Invoice[];
  p=1;

  constructor(private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit(): void {

    // this.getDetails();
  }
  // private getDetails() {
  //   this.invoiceService.getList().subscribe(data => {
  //     this.invoices = data;
  //   });

  }
  // onclick(id: number) {
  //   this.router.navigate(['/invoice-details', id]);
  //   console.log(id);
  // }


