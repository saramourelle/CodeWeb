import { NgModule } from '@angular/core';
import { OntimizeWebModule } from "ontimize-web-ngx";
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHomeComponent } from './about-home/about-home.component';

@NgModule({
  declarations: [
    AboutHomeComponent
  ],
  imports: [
    CommonModule,
    OntimizeWebModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
