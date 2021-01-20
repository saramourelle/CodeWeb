import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsDetailComponent } from './rentals-detail/rentals-detail.component';
import { RentalsHomeComponent } from './rentals-home/rentals-home.component';
import { RentalsNewComponent } from './rentals-new/rentals-new.component';


const routes: Routes = [{
  path : '',
  component: RentalsHomeComponent
},
{
  path: "new",
  component: RentalsNewComponent
},
{
  path: ":rentals_id",
  component: RentalsDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule { }
