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
export class ListmailService {
  readonly ROOT_URL = "http://localhost:3000/email"
  emails: Observable<any>;
  constructor(private http: HttpClient) { }

  createMail(Email: string, Messages: string, Name: string, Subject: string) {
    const data: ListMail = {
      id: null,
      name: Name,
      subject: Subject,
      messages: Messages,
      email: Email
    }
    //  console.log(data);
    return this.http.post<any>(this.ROOT_URL, data).subscribe(value => { this.emails = value; alert("Your Mail is Sending...!") });
  }
  deleteEmail(id:number) {
    if (confirm('Are you sure you want to delete this?')) {
      return this.http.delete<any>(this.ROOT_URL+"/"+id,httpOptions).pipe(
        tap(value => value),
        catchError(error => of([])
        ));
    }
      
  }

  getData(): Observable<any>{
    // return this.http.get<any>(this.ROOT_URL).subscribe(value => {this.emails=value});
    return this.http.get<any>(this.ROOT_URL).pipe(
      tap(value => value),
      catchError(error => of([])
      )
    );
  }
}