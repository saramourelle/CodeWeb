import { Component, OnInit, ViewChild } from '@angular/core';
import {OTableComponent} from 'ontimize-web-ngx'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rentals-home',
  templateUrl: './rentals-home.component.html',
  styleUrls: ['./rentals-home.component.css']
})
export class RentalsHomeComponent //implements OnInit

{
  @ViewChild('table' , {static: true}) table: OTableComponent;

  constructor(
    protected sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  public getImageSrc(base64: string): any {
    return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64) : './assets/images/no-image-transparent.png';
  }
}
