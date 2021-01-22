import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-flat-home',
  templateUrl: './flat-home.component.html',
  styleUrls: ['./flat-home.component.css']
})
export class FlatHomeComponent implements OnInit {

  constructor(
    protected sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  public getImageSrc(base64: string): any {
    return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64) : './assets/images/no-image-transparent.png';
  }
}
