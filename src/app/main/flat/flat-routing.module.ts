import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatDetailComponent } from './flat-detail/flat-detail.component';
import { FlatHomeComponent } from './flat-home/flat-home.component';
import { FlatNewComponent } from './flat-new/flat-new.component';

const routes: Routes = [{
  path: '',
  component: FlatHomeComponent
},
{
  path: 'new',
  component: FlatNewComponent
},
{
  path: ':flat_id',
  component: FlatDetailComponent
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatRoutingModule { }
