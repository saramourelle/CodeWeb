import { OntimizeWebModule } from 'ontimize-web-ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlquileresRoutingModule } from './alquileres-routing.module';
import { AlquileresHomeComponent } from './alquileres-home/alquileres-home.component';
import { AlquileresDetailComponent } from './alquileres-detail/alquileres-detail.component';


@NgModule({

  declarations: [
    AlquileresHomeComponent,
    AlquileresDetailComponent
  ],

  imports: [
    CommonModule,
    OntimizeWebModule,
    AlquileresRoutingModule,
  ]
})
export class AlquileresModule { }
