import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { IProduct } from '../../interfaces/producto.interface';

import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  array = [1,2];
  products: IProduct [] = [];

  constructor( private productService: ProductoService, private carritoS: CarritoService ) { }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  addProductService(product: IProduct) {
    this.carritoS.productos.push(product);
  }

  filterProducts( category: string ): IProduct[] {
    return this.productService.getProductsByCategory(category);
  }

}
