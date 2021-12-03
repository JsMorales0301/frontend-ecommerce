import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: []
})
export class NavbarComponent {

  
  public login : boolean = false;
  constructor( public carritoS: CarritoService ) { }



  ngOnInit() {
  }
}


