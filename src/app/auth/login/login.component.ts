import { UserService } from './../../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Users: Observable<any>;
  constructor(private userService: UserService) { }
  checkLogin(username:string,password:string){
    this.userService.checkUser(username,password).subscribe(value => {
      for(let i=0 ; i< value.length; i++)
      {
          
          if (value[i].username === username && value[i].password === password)
          {
             alert("true");
          } 
      }    
    });
  }

  ngOnInit() {
  }

}
