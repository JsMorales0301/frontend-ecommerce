import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: []
})
export class NavbarComponent {

  tokenSession: any;
  public login : boolean = false;
  constructor( public carritoS: CarritoService, private router: Router) { }

goToHome(){
  this.router.navigate(['']);
}

  ngOnInit() {
    console.log(localStorage.getItem("tokenSession"))
   this.tokenSession =  this.readLocalStorageValue('tokenSession');
  }

  readLocalStorageValue(key: string): any {
    return localStorage.getItem(key);
}

LogOut(): void{
  window.localStorage.clear();
  window.location.reload();

}
}


