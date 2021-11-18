import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from "primeng/inputtext";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    DialogModule,
    ButtonModule
  ],
  
})
export class PrimeNgModule { }
