import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent{

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): any {
    this.primengConfig.ripple = true;
  }


   displayModal: boolean = true;

  showModalDialog() {
    this.displayModal = true;
}
}
