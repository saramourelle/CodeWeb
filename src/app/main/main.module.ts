import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../shared/shared.module'; //CARPETA SUPERIOR
import { MainRoutingModule } from './main-routing.module'; //CARPETA ACTUAL
import { MainComponent } from './main.component';


@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent

  ]
})
export class MainModule { }
