import {Component, OnInit, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {MobilemenuComponent} from "../../shared/mobilemenu/mobilemenu.component";
import {CustomthemeService} from "../../shared/service/customtheme.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, DoCheck {
  bgtheme: string = "";
  texttheme: string = "";
  ptheme:number=0;
  customthemeservice:CustomthemeService;

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
  }


}
