import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'Veve';
  customthemeservice: CustomthemeService;
  bgtheme: string = "";
  texttheme: string = "";
  ptheme: number = 0;

  constructor(customthemeservice: CustomthemeService) {
    this.bgtheme = customthemeservice.btheme;
    this.texttheme = customthemeservice.ttheme;
    this.ptheme = customthemeservice.ptheme;
    this.customthemeservice = customthemeservice;
  }

  ngOnInit(): void {
  }



}

