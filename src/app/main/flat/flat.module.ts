import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';

import { FlatRoutingModule } from './flat-routing.module';
import { FlatHomeComponent } from './flat-home/flat-home.component';


@NgModule({
  declarations: [
    FlatHomeComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    FlatRoutingModule
  ]
})
export class FlatModule { }
