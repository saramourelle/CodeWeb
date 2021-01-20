import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatHomeComponent } from './flat-home/flat-home.component';


const routes: Routes = [{
  path: '',
  component: FlatHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlatRoutingModule { }
