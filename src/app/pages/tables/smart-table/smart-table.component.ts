import { ListmailService } from './../../../listmail.service';
import { Observable } from 'rxjs';
import { ListMail } from './../../../@core/data/listmail';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
      color:white;
    }
    .tableborder{
      border-top: 0px
      border-bottom: 1px solid #2f296a;
     
    }
    .item{
     
      background:#0087db;
    }
  `],
})


export class SmartTableComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Subject: {
        title: 'Subject',
        type: 'string',
      },
      
      Name: {
        title: 'Name',
        type: 'string',
      },
      Messages: {
        title: 'Messages',
        type: 'string',
      },
     
    },
  };
  emails: Observable<any>;
  constructor(private service: ListmailService,private http: HttpClient) {

   
  }
  ngOnInit(){

    this.service.getData().subscribe(value => {this.emails=value});
  }
  deleteEmail(id:number): void{
    this.service.deleteEmail(id).subscribe(value => {
      this.emails= this.emails.filter(filterID => filterID.id !== id); // update when delete
        alert("Deleted!")
      });;
  }
 

}
