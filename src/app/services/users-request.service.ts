
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersRequestService {
  constructor(private http: HttpClient) { }


  public _url: string = 'http://localhost:4000'


  login(url:string, data:any): any{
    let promise = new Promise((resolve, reject)=>{
        this.http.post(url, data)
        .toPromise()
        .then((res: any) =>{
          resolve(res)
        })
    })
    return promise
  }
}
