import {Component, DoCheck, OnInit} from '@angular/core';
import {CustomthemeService} from "../../shared/service/customtheme.service";
import {MobilemenuComponent} from "../../shared/mobilemenu/mobilemenu.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, DoCheck {

  bgtheme: string = "";
  texttheme: string = "";
  ptheme: number = 0;
  customthemeservice: CustomthemeService;

  constructor(customthemeservice: CustomthemeService) {
    this.customthemeservice = customthemeservice;
  }

  ngOnInit(): void {
    this.setTheme();
  }

  ngDoCheck(): void {
    this.setTheme();
  }


  setTheme() {
    this.bgtheme = this.customthemeservice.btheme;
    this.texttheme = this.customthemeservice.ttheme;
    this.ptheme = this.customthemeservice.ptheme;
  }


}
