import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  Users: Observable<any>;
  constructor(private userService: UserService,private router: Router) { }
  checkLogin(username:string,password:string){
    // this.userService.checkUser(username,password).subscribe(value => {
    //   console.log(value);
    // });
    if(username==="admin"&&password==="admin"){
      alert("Welcom Admin!");
      
      this.router.navigate(['/pages']);
      
    } else{
      alert("Wrong username/password!");
    }
  }

  ngOnInit() {
  }

}
