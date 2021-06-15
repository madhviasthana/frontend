import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {
  id: any
  invoice!: any[];
  showPopup = false;
  showPopups = false;
  remarks !:any;

  constructor(private route:ActivatedRoute, private route2 :Router , private invoiceServise:InvoiceService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]; 
       this.invoiceServise.getinvoiceDetails(this.id).subscribe(data => {
      this.invoice = data;
      
    })
  }
  onClickCancel() {
    this.route2.navigate(['']);

  }
  onClickApprove() {
    this.invoiceServise.updateInvoiceDetails(this.id, this.remarks);
    console.log(this.remarks);
    alert('Submitted Sucessfully');
    this.route2.navigate(['']);
  }
  
  onClickReject() {
    alert('Rejected');
    this.route2.navigate(['']);
  }

  openChat() {
    let dialogRef = this.dialog.open(ChatWindowComponent, {
      width: '80%',
      
    });    
    
    

}





}