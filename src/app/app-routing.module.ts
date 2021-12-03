import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { ProductosDetalleComponent } from './components/productos/productos-detalle/productos-detalle.component';
import { CarritoDeCompraComponent } from './components/carrito-de-compra/carrito-de-compra.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroUsuarioComponent
  },
  {
    path: 'product-detail',
    component: ProductosDetalleComponent
  },
  {
    path: 'carrito-compra',
    component: CarritoDeCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
