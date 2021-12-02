import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private http: HttpClient) { 
  }

  // login(body:any):Observable<any> {


  //   return this.http.post("localhost:4000/api/auth/login" , JSON.stringify(body), 
  //   {
  //     headers: new HttpHeaders({
  //       'Content-Type' : 'aplication/json; charset=utf-8'
  //     })
  //   }).pipe(map((body) => (body))),
  //     catchError(err =>{
  //     console.warn(err);
  //     return throwError ('Ha ocurrido un error');
  //   })
  // }
}
