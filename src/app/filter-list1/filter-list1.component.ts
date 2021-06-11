import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';


@Component({
  selector: 'app-filter-list1',
  templateUrl: './filter-list1.component.html',
  styleUrls: ['./filter-list1.component.css']
})
export class FilterList1Component implements OnInit {
 filteredInvoice1!:Invoice[];
 p =1;
  constructor(private router: Router, private route:ActivatedRoute, private invoiceService:InvoiceService ) { }

  ngOnInit(): void {
  this.getDetails();  

  }
   getDetails()
  {
    console.log("4 in filter1-list")

   this.filteredInvoice1= this.invoiceService.retrievePassedObject();
    console.log("6 in filter1-list")

    console.log(this.filteredInvoice1)

  }

  onclick(id: number) {
    this.router.navigate(['/invoice-details', id]);
    console.log(id);
  }


 
}

