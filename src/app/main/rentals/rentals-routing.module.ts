import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsDetailComponent } from './rentals-detail/rentals-detail.component';
import { RentalsHomeComponent } from './rentals-home/rentals-home.component';


const routes: Routes = [{
  path : '',
  component: RentalsHomeComponent
},
{
  path: ":RENTALSID",
  component: RentalsDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule { }
