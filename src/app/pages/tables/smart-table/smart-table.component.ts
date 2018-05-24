import { SmartTableService } from './../../../@core/data/smart-table.service';
import { Observable } from 'rxjs';
import { ListMail } from './../../../@core/data/listmail';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { Headers } from '@angular/http'
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
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


export class SmartTableComponent {

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


  readonly ROOT_URL="http://localhost:3000/email"
  emails: Observable<any>;
  newEmails: Observable<any>;
  

  constructor(private service: SmartTableService,private http: HttpClient) {

   this.getData();

  }
  deleteEmail(id:number){
    if (confirm('Are you sure you want to delete this?')) {
      this.http.delete<any>(this.ROOT_URL+"/"+id,httpOptions).subscribe(value => {
        this.emails=this.emails.filter(filterID => filterID.id !== id); // update when delete
        alert("Deleted!")
      });
    }
   
   
     
  }

  getData(){
    return this.http.get<any>(this.ROOT_URL).subscribe(value => {this.emails=value});
  }

}
