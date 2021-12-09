import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/producto.interface';
import { CarritoService } from '../../services/carrito.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { IClientAuthorizeCallbackData,ICreateOrderRequest,IPayPalConfig } from 'ngx-paypal';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-carrito-de-compra',
  templateUrl: './carrito-de-compra.component.html',
  styleUrls: ['./carrito-de-compra.component.css']
})
export class CarritoDeCompraComponent implements OnInit {

  dataPurchase = {};
  public payPalConfig?: IPayPalConfig
  state: boolean = false;
  productAdd: IProduct[] = [];

  constructor(private carritoS: CarritoService, private router: Router) { }
  tokenSession: any;


  LogOut(): void {
    window.localStorage.clear();
    window.location.reload();

  }
  ngOnInit(): void {
    this.initConfig();
    this.getItem();
    console.log(localStorage.getItem("tokenSession"))
    this.tokenSession = this.readLocalStorageValue('tokenSession');
    
    if (this.tokenSession === null) {
      Swal.fire({
        title: 'Incia sesión antes de continuar!',
        imageUrl: '../../../assets/productos/clipart1383500.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      }); this.router.navigate(['']);
    }
  }

  private initConfig(): void {
    console.log('Estoy ingresando al método');
    this.payPalConfig = {
        currency: 'USD',
        clientId: environment.clientId,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: this.getTotal().toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: this.getTotal().toString()
                        }
                    }
                },
                items: this.getItemsList()
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.dataPurchase = data;
            this.endShopping();
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
}


  readLocalStorageValue(key: string): any {
    return localStorage.getItem(key);
  }

  getItem(): void {
    this.productAdd = this.carritoS.productos;
  }

  getItemsList(): any[] {
    const items: any[] = [];
    let item = {};
    this.productAdd.forEach( (it, i) => {
      item = {
        name: it.nombre,
        quantity: 1,
        unit_amount: {
          value: it.precio * 0.00031,
          currency_code: 'USD'
        }
      };
      items.push(item);
    })
    return items;
  }

  getSubtotal() {
    let subtotal: number = 0;

    this.productAdd.forEach(item => {
      subtotal += item.precio ;
    });

    return subtotal * 0.00031;
  }

  getTotal() {
    let total: number = 0;

    this.productAdd.forEach(item => {
      total += item.precio;
    });

    return total * 0.00031;
  }

  getLengthItemCart() {
    let size = this.productAdd.length;
    return size;
  }

  endShopping() {
    this.productAdd = [];
    this.carritoS.productos = [];
    this.state = true;
  }

  deleteItemCart(name: string) {
    this.productAdd.forEach((item, i) => {
      if (name === item.nombre) {
        this.productAdd.splice(i, 1);
        this.carritoS.productos.splice(i, 1);
      }
    })
  }

}
