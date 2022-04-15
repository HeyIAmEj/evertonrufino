import { Component, OnInit } from '@angular/core';
import {CustomthemeService} from "../../shared/service/customtheme.service";

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
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
