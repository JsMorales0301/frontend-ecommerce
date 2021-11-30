import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  array = ['../../../assets/logo/LOGO.png','https://www.teknofilo.com/wp-content/uploads/2020/03/whatsapp-1280x720.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
