import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';
import { HomeModule } from './home/home.module';
import { CustomersModule } from './../customers/customers.module';
import { AlquileresModule } from '../alquileres/alquileres.module';

export function loadHomeModule() {
  return HomeModule;
}

export function loadCustomersModule() {
  return CustomersModule;
}
export function loadAlquileresModule() {
  return AlquileresModule;
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
        path: 'customers',
        loadChildren: loadCustomersModule
      },
      {
        path: 'alquileres',
        loadChildren: loadAlquileresModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
