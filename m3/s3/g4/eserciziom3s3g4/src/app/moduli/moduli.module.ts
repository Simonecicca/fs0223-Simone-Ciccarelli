import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuliRoutingModule } from './moduli-routing.module';
import { ModuliComponent } from './moduli.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ModuliComponent
  ],
  imports: [
    CommonModule,
    ModuliRoutingModule,
    BrowserModule,
  ]
})
export class ModuliModule { }
