import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice'
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})


export class ChatWindowComponent implements OnInit {

  chats!:Invoice[];
p=1;
  constructor(private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  getMessage() {
    console.log("Message Recieved")

    this.chats = this.invoiceService.retrievePassedObject();
    console.log("Message passed")

    console.log(this.chats)

  }
  // onclick(id: number) {
  //   this.router.navigate(['/invoice-details', id]);
  //   console.log(id);
  // }

}



