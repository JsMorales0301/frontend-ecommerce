import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

  panels = [
    {
      active: false,
      name: 'CARACTERÍSTICAS PRINCIPALES DEL PRODUCTO',
      disabled: false,
      mainFeaturesP: [{
      detail1: 'Procesador AMD Ryzen Zen 2 con 8 núcleos, 16 subprocesos.',
      detail2: 'Frecuencia variable de procesador hasta 3.5 GHz.',
      detail3: 'Frecuencia variable de GPU hasta 2.23 GHz (10.3 TFLOPS).',
      detail4: 'Memoria GDDR6 16 GB con ancho de banda de 448 GB/s.'
      }]
    },
    {
      active: false,
      disabled: false,
      name: 'DETALLES DEL PRODUCTO',
      mainDetailsProduct: [{
        detail1: 'CPU: 8 núcleos Zen 2 a 3.5GHz (frecuencia variable)',
        detail2: 'GPU 10.28 TFLOPs, 36 CUs a 2.23GHz (frecuencia variable)',
        detail3: 'Arquitectura de la GPU RDNA 2 a medida',
        detail4: 'Memoria/Interfaz 16GB GDDR6/256-bit',
        detail5: 'Ancho de banda de la memoria 448GB/s',
        detail6: 'Almacenamiento 825GB SSD a medida',
        detail7: 'IO 5.5GB/s (Puro), 8-9GB/s de media (Comprimido)',
        detail8: 'Ampliación de almacenamiento Slot NVMe SSD',
        detail9: 'Almacenamiento externo Compatibilidad USB HDD',
        detail10: 'Lector óptico 4K UHD Blu-ray'
      }]
    },
    {
      active: false,
      disabled: false,
      name: 'RESEÑAS'

    }
  ];

  
  constructor() { }

  ngOnInit(): void {

   
  }

}
