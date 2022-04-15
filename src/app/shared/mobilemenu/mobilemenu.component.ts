import {Component, DoCheck, OnInit} from '@angular/core';
import {CollapseModule, CollapseDirective} from "ngx-bootstrap/collapse";
import {CustomthemeService} from "../service/customtheme.service";


@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss']
})
export class MobilemenuComponent implements OnInit, DoCheck{
  isCollapsed: boolean = false;
  bgtheme: string = "";
  texttheme: string = "";
  ptheme:number=0;
  customthemeservice:CustomthemeService;
  ischecked:boolean=false;

  constructor(customthemeservice: CustomthemeService) {
    this.customthemeservice = customthemeservice;
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
    if (this.bgtheme == "bg-theme-dark"){
      this.ischecked = true;
    }else{
      this.ischecked = false;
    }
  }


  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;

  }

  toggleTheme(){
    if (this.customthemeservice.btheme == "bg-theme-dark"){
      this.customthemeservice.changeTheme(1, 1);
    }else{
      this.customthemeservice.changeTheme(0, 1);
    }
    this.setTheme();
  }

}
