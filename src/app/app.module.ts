import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarritoDeCompraComponent } from './components/carrito-de-compra/carrito-de-compra.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosDetalleComponent } from './components/productos/productos-detalle/productos-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarritoDeCompraComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    CarrouselComponent,
    ProductosComponent,
    ProductosDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
