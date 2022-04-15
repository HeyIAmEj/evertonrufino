import {Component, DoCheck, OnInit} from '@angular/core';
import {CustomthemeService} from "../../shared/service/customtheme.service";

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit, DoCheck {
  bgtheme: string = "";
  texttheme: string = "";
  ptheme:number=0;
  customthemeservice:CustomthemeService;

  constructor(customthemeservice: CustomthemeService) {
    this.customthemeservice = customthemeservice;
    this.setTheme();

  }
  ngOnInit(): void {
    this.setTheme();
  }
  ngDoCheck(): void {
    this.setTheme();
  }
  setTheme(){
    this.bgtheme = this.customthemeservice.btheme;
    this.texttheme = this.customthemeservice.ttheme;
    this.ptheme = this.customthemeservice.ptheme;
  }
}
