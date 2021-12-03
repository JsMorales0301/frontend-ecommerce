import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos: IProduct[] = [];

  constructor() { }
}
