import {Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {ModalModule} from "ngx-bootstrap/modal";
import {response} from "express";
import {CustomthemeService} from "./shared/service/customtheme.service";
import {toInt} from "ngx-bootstrap/chronos/utils/type-checks";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Veve';
  customthemeservice: CustomthemeService;
  bgtheme: string = "";
  texttheme: string = "";
  ptheme: number = 0;
  ischecked:boolean=false;

  constructor(customthemeservice: CustomthemeService) {
    this.customthemeservice = customthemeservice;
    this.setTheme();
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.setTheme();
  }


  toggleTheme(){
    if (this.customthemeservice.btheme == "bg-theme-dark"){
      this.customthemeservice.changeTheme(1, 1);
    }else{
      this.customthemeservice.changeTheme(0, 1);
    }
    this.setTheme();
  }

  setTheme(){
    this.bgtheme = this.customthemeservice.btheme;
    this.texttheme = this.customthemeservice.ttheme;
    this.ptheme = this.customthemeservice.ptheme;
    if (this.bgtheme == "bg-theme-dark"){
      this.ischecked = true;
    }else{
      this.ischecked = false;
    }
  }

}

