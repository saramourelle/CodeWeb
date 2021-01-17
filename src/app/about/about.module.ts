import { OntimizeWebModule } from 'ontimize-web-ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],

  imports: [
    CommonModule,
    AboutRoutingModule,
    OntimizeWebModule
  ]
})
export class AboutModule { }
