import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UsersRequestService {
  constructor(private http: HttpClient) { }


  public _url: string = 'http://localhost:4000'


  createUser(url:string, data:any) {
    let promise = new Promise((resolve, reject)=>{
        this.http.post(url, data)
        .toPromise()
        .then((res: any) =>{
          console.log(res)
          resolve(res)
        })
    })
    return promise
  }
}
