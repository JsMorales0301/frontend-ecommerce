import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

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
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { HomeComponent } from './components/home/home.component';


registerLocaleData(es);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

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
    ProductosDetalleComponent,
    HomeComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    DragDropModule,
    ScrollingModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    NzIconModule,
    NzSelectModule,
    NzCarouselModule,
    NzCardModule,
    NzAvatarModule,
    NzDividerModule,
    NzCollapseModule,
    HttpClientModule
      
  ],
  providers: [ { provide: NZ_I18N, useValue: es_ES }, { provide: NZ_ICONS, useValue: icons } ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
