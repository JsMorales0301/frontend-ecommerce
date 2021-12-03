import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = new Subject();

  constructor() { }

  sendMessage(product: IProduct): void {
    this.message.next(product);
  }

  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
}
