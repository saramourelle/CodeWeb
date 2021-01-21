import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomHomeComponent } from './room-home/room-home.component';
import { RoomNewComponent } from './room-new/room-new.component';

const routes: Routes = [{
  path: '',
  component: RoomHomeComponent
},{
  path: 'room_id',
  component: RoomDetailComponent
}, {
  path: 'new',
  component: RoomNewComponent
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
