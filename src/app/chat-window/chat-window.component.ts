import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice'
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import {User} from "./chatmodel";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})


export class ChatWindowComponent implements OnInit {
  UserModel:User=new User();

  constructor(private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  
  f(){
    console.log("check");
    console.log(this.UserModel);
      this.invoiceService.sendMessage(this.UserModel); 
  }

  
 

  
  // onclick(id: number) {
  //   this.router.navigate(['/invoice-details', id]);
  //   console.log(id);
  // }

}



