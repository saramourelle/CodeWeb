import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomHomeComponent } from './room-home/room-home.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';


@NgModule({
  declarations: [
    RoomHomeComponent,
    RoomDetailComponent

  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }

