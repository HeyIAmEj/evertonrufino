import {Component, OnInit} from '@angular/core';
import { CollapseModule, CollapseDirective } from "ngx-bootstrap/collapse";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Veve';
  theme_light = {
    "bg": "bg-white",
    "primary": "bg-primary-light",
    "text": "text-dark"
  };
  theme_dark = {
    "bg": "bg-dark",
    "primary": "bg-primary-dark",
    "text": "text-white"
  };
  theme:any=this.theme_dark;

  isCollapsed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }
}

