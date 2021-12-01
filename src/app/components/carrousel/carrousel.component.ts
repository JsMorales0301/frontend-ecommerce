import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  array = ['../../../assets/carrousel/imagen1.png','../../../assets/carrousel/imagen2.png', '../../../assets/carrousel/imagen3.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
