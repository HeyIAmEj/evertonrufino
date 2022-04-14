import { Component, OnInit } from '@angular/core';
import {MobilemenuComponent} from "../../shared/mobilemenu/mobilemenu.component";
import {CustomthemeService} from "../../shared/service/customtheme.service";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  bgtheme: string = "";
  texttheme: string = "";
  ptheme:number=0;

  constructor(customthemeservice: CustomthemeService) {
    this.bgtheme = customthemeservice.btheme;
    this.texttheme = customthemeservice.ttheme;
    this.ptheme = customthemeservice.ptheme;
  }

  ngOnInit(): void {

  }


}
