import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';

import { FlatRoutingModule } from './flat-routing.module';
import { FlatHomeComponent } from './flat-home/flat-home.component';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';


@NgModule({
  declarations: [
    FlatHomeComponent,
    FlatDetailComponent

  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    FlatRoutingModule
  ]
})
export class FlatModule { }
