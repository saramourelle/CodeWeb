import { Component, OnInit, ViewChild } from '@angular/core';
import {OTableComponent} from 'ontimize-web-ngx'

@Component({
  selector: 'app-rentals-home',
  templateUrl: './rentals-home.component.html',
  styleUrls: ['./rentals-home.component.css']
})
export class RentalsHomeComponent //implements OnInit

{
  @ViewChild('table' , {static: true}) table: OTableComponent;

  constructor() { }

  ngOnInit() {
  }

}
