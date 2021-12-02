import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

   cantidad: number = 1
   monto: number = 20000

  panels = [
    {
      active: false,
      name: 'CARACTERÍSTICAS PRINCIPALES DEL PRODUCTO',
      disabled: false,
      mainFeaturesP: [
     'Procesador AMD Ryzen Zen 2 con 8 núcleos, 16 subprocesos.',
     'Frecuencia variable de procesador hasta 3.5 GHz.',
     'Frecuencia variable de GPU hasta 2.23 GHz (10.3 TFLOPS).',
     'Memoria GDDR6 16 GB con ancho de banda de 448 GB/s.'
      ],
    },
    {
      active: false,
      disabled: false,
      name: 'DETALLES DEL PRODUCTO',
      mainDetailsProduct: [
        'CPU: 8 núcleos Zen 2 a 3.5GHz (frecuencia variable)',
        'GPU 10.28 TFLOPs, 36 CUs a 2.23GHz (frecuencia variable)',
        'Arquitectura de la GPU RDNA 2 a medida',
        'Memoria/Interfaz 16GB GDDR6/256-bit',
        'Ancho de banda de la memoria 448GB/s',
        'Almacenamiento 825GB SSD a medida',
        'IO 5.5GB/s (Puro), 8-9GB/s de media (Comprimido)',
        'Ampliación de almacenamiento Slot NVMe SSD',
        'Almacenamiento externo Compatibilidad USB HDD',
         'Lector óptico 4K UHD Blu-ray'
      ]
    },
    {
      active: false,
      disabled: false,
      name: 'RESEÑAS'

    }
  ];

  
  constructor() { }

  ngOnInit(): void {

  //  console.log(panels[0].mainFeaturesP?.detail1)

  }

}
