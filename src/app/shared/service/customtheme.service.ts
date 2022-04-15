import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomthemeService {
  btheme: string = "bg-theme-dark";
  ttheme: string = "text-theme-light";
  ptheme: number = 1;

  // btheme:string="bg-theme-light";
  // ttheme:string="text-theme-dark";

  constructor() {
  }

  changeTheme(lum: number, primary: number) {
    if (lum == 0) {
      this.btheme = "bg-theme-dark";
      this.ttheme = "text-theme-light";
    } else {
      this.btheme = "bg-theme-light";
      this.ttheme = "text-theme-dark";
    }
    this.ptheme = primary;
  }


}
