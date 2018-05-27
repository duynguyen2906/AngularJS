import { ListUser } from './@core/data/listuser';
import { of } from 'rxjs/observable/of';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import { ListMail } from './@core/data/listmail';
import { Injectable } from '@angular/core';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly ROOT_URL = "http://localhost:3000/user"
  Users: Observable<any>;
  constructor(private http: HttpClient) { }
  createUser(Username:string, Password: string) {
    const data: ListUser = {
      id: null,
      username: Username,
      password: Password
    }

    return this.http.post<any>(this.ROOT_URL, data).subscribe(value => { this.Users = value; alert("Register Done!") });
  }
  checkUser(username:string,password:string): Observable<any>{
   
    return this.http.get<any>(this.ROOT_URL).pipe(
      tap(value => value),
      catchError(error => of([])
      )
    );
  }

}
