import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/producto.interface';
import { CarritoService } from '../../services/carrito.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';



@Component({
  selector: 'app-carrito-de-compra',
  templateUrl: './carrito-de-compra.component.html',
  styleUrls: ['./carrito-de-compra.component.css']
})
export class CarritoDeCompraComponent implements OnInit {

  state: boolean = false;
  productAdd: IProduct[] = [];

  constructor( private carritoS: CarritoService, private router: Router ) { }
  tokenSession: any;


LogOut(): void{
  window.localStorage.clear();
  window.location.reload();

}
  ngOnInit(): void {
    this.getItem();
    console.log(localStorage.getItem("tokenSession"))
   this.tokenSession =  this.readLocalStorageValue('tokenSession');

   if(this.tokenSession === null){
    Swal.fire({
      title: 'Incia sesión antes de continuar!',
      imageUrl: '../../../assets/productos/clipart1383500.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });  this.router.navigate(['']);
   }
  }

  
  readLocalStorageValue(key: string): any {
    return localStorage.getItem(key);
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
