import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: []
})
export class NavbarComponent {

  
  public login : boolean = false;
  constructor() { }



  ngOnInit() {
  }
}

