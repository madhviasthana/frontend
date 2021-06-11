import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterList1Component } from './filter-list1/filter-list1.component';
import { FilterList2Component } from './filter-list2/filter-list2.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

const routes: Routes = [
  { path: '', component: InvoiceListComponent },
  { path: 'invoice-details/:id', component: InvoiceDetailsComponent },
  { path: 'filtered-invoices1', component: FilterList1Component},
  { path: 'filtered-invoices2', component: FilterList2Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
