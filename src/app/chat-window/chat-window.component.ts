import { Component, Inject, OnInit } from '@angular/core';
import { Invoice } from '../invoice'
import { InvoiceService } from '../invoice.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import {User} from "./chatmodel";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogModule,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})


export class ChatWindowComponent implements OnInit {
  UserModel:User=new User();
  form!: FormGroup;
    description!:string;

  constructor(private router: Router, private invoiceService: InvoiceService, public dialog:MatDialog,private fb: FormBuilder,
    private dialogRef: MatDialogRef<ChatWindowComponent>, @Inject(MAT_DIALOG_DATA) Data:any) { }

  ngOnInit(): void {
  }

  
  f(){
    console.log("check");
    console.log(this.UserModel);
      this.invoiceService.sendMessage(this.UserModel); 
  }

  

  logOut()
  {
    this.dialog.closeAll();
  }
  
  // onclick(id: number) {
  //   this.router.navigate(['/invoice-details', id]);
  //   console.log(id);
  // }

}



