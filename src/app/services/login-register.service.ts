import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient) { 
  }

  login(){

    const data = {
      username: 'BNIA',
      password: '123456'
    };

    return this.http.post("localhost:4000/api/auth/login" , JSON.stringify(data), 
    {
      headers: new HttpHeaders({
        'Content-Type' : 'aplication/json; charset=utf-8'
      })
    }).pipe(map((data) => (data))),
      catchError(err =>{
      console.warn(err);
      return throwError ('Ha ocurrido un error');
    })
  }
}
