import { Observable } from 'rxjs';
import { ListMail } from './../../../@core/data/listmail';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import 'rxjs/add/operator/toPromise';
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

  // source: LocalDataSource = new LocalDataSource();
  readonly ROOT_URL="http://localhost:3000/email"
  emails: Observable<any>;
  newEmails: Observable<any>;

  

  constructor(private service: SmartTableService,private http: HttpClient) {

   this.getData();

  }
  deleteEmail(id:number){
    this.emails=this.http.delete(`${this.ROOT_URL}/${id}`);

  
  }
  getData(){
    return this.emails = this.http.get(this.ROOT_URL);
  }

}
