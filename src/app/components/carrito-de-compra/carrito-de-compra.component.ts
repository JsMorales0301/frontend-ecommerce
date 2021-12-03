import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/producto.interface';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-carrito-de-compra',
  templateUrl: './carrito-de-compra.component.html',
  styleUrls: ['./carrito-de-compra.component.css']
})
export class CarritoDeCompraComponent implements OnInit {

  state: boolean = false;
  productAdd: IProduct[] = [];

  constructor( private carritoS: CarritoService ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.productAdd = this.carritoS.productos;
  }

  getSubtotal() {
    let subtotal: number = 0;

    this.productAdd.forEach( item => {
      subtotal += item.precio;
    });

    return subtotal;
  }

  getTotal() {
    let total: number = 0;

    this.productAdd.forEach( item => {
      total += item.precio;
    });

    return total;
  }

  getLengthItemCart() {
    let size = this.productAdd.length;
    return size;
  }

  endShopping(){
    this.productAdd = [];
    this.carritoS.productos = [];
    this.state = true;
  }

  deleteItemCart(name: string) {
    this.productAdd.forEach((item,i) => {
      if(name === item.nombre) {
        this.productAdd.splice(i, 1);
        this.carritoS.productos.splice(i,1);
      }  
    })
  }

}
