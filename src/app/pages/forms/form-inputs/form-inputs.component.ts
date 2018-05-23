import { ListMail } from './../../../@core/data/listmail';
import { Observable, Subject } from 'rxjs';
import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/of';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {
  starRate = 2;
  heartRate = 4;
  // AddMail(subject:string,name:string,mail:string,message:string){
  //   subject=subject.trim();
  //   name=name.trim();
  //   mail=mail.trim();
  //   message=message.trim();

  // }
  log(x) {console.log(x);}
  readonly ROOT_URL="http://localhost:3000/email"
  newEmail: Observable<any>;
  constructor(private http: HttpClient){

  }
  createMail(Email: string,Messages:string,Name: string,Subject: string){
    const data: ListMail = {
      id: null,
      name: Name,
      subject: Subject,
      messages: Messages,
      email: Email
    }
    //  console.log(data);
    this.newEmail = this.http.post(this.ROOT_URL,data);
  }
 
}
