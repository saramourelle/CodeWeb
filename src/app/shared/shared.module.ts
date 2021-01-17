import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
//import { OChartModule } from 'ontimize-web-ngx-charts';


//import { MovementTypesCellRendererComponent } from './movement-types-renderer/movement-types-cell-renderer';

@NgModule({
  imports: [
    OntimizeWebModule,
    //OChartModule
  ],
  declarations: [
    //MovementTypesCellRendererComponent,

  ],
  exports: [
    CommonModule,
    //MovementTypesCellRendererComponent,

  ],

})
export class SharedModule { }
