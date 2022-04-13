import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

}
