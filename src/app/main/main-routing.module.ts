import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
//import { CustomersModule } from './../customers/customers.module';

import { RentalsModule }  from  './rentals/rentals.module' //importacion de la referencia del nuevo modulo
import { FlatModule} from  './flat/flat.module'
export function loadHomeModule() {
  return HomeModule;
}


export function loadRentalsModule() {
  return RentalsModule;
}

export function loadFlatModule() {
  return FlatModule;
}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: loadHomeModule
      },
      {
        //modulo de alquileres relacionado con el modulo main mediante la definición de la ruta correspondiente
        path: 'rentals',
        loadChildren: loadRentalsModule
      },
      {
        //modulo de pisos relacionado con el modulo main mediante la definición de la ruta correspondiente
        path: 'flat',
        loadChildren: loadFlatModule
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
