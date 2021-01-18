import { OntimizeWebModule } from 'ontimize-web-ngx'; //para poder usar los componentes de ontimize web
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsHomeComponent } from './rentals-home/rentals-home.component';
import { RentalsDetailComponent } from './rentals-detail/rentals-detail.component';
import { RentalsRoutingModule } from './rentals-routing.module';


@NgModule({

  declarations: [
    RentalsHomeComponent,
    RentalsDetailComponent
  ],

  imports: [
    CommonModule,
    OntimizeWebModule,
    RentalsRoutingModule
  ]
})
export class RentalsModule { }
