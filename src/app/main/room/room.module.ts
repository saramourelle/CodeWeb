import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomHomeComponent } from './room-home/room-home.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomNewComponent } from './room-new/room-new.component';

@NgModule({
  declarations: [
    RoomHomeComponent,
    RoomDetailComponent,
    RoomNewComponent

  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }

