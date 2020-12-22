import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquileresDetailComponent } from './alquileres-detail/alquileres-detail.component';
import { AlquileresHomeComponent } from './alquileres-home/alquileres-home.component';


const routes: Routes = [{
  path : '',
  component: AlquileresHomeComponent
},
{
  path: ":ALQUILERESID",
  component: AlquileresDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquileresRoutingModule { }
