import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-filter-list2',
  templateUrl: './filter-list2.component.html',
  styleUrls: ['./filter-list2.component.css']
})
export class FilterList2Component implements OnInit {
  filteredInvoice2!: Invoice[]
  p = 1;
  constructor(private route: ActivatedRoute, private router: Router, private invoiceService: InvoiceService ) { }

  ngOnInit(): void {
    this.getDetails();
  }
   getDetails() {
    console.log("4 in filter1-list")

    this.filteredInvoice2 = this.invoiceService.retrievePassedObject();
    console.log("6 in filter1-list")

    console.log(this.filteredInvoice2)

  }
  onclick(id: number) {
    this.router.navigate(['/invoice-details', id]);
    console.log(id);
  }


}
