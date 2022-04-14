import {Component, OnInit} from '@angular/core';
import {CollapseModule, CollapseDirective} from "ngx-bootstrap/collapse";
import {CustomthemeService} from "../service/customtheme.service";


@Component({
  selector: 'app-mobilemenu',
  templateUrl: './mobilemenu.component.html',
  styleUrls: ['./mobilemenu.component.scss']
})
export class MobilemenuComponent implements OnInit{
  isCollapsed: boolean = false;
  bgtheme: string = "";
  texttheme: string = "";

  constructor(customthemeservice: CustomthemeService) {
    this.bgtheme = customthemeservice.btheme;
    this.texttheme = customthemeservice.ttheme;
  }

  ngOnInit(): void {

  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;

  }

}
