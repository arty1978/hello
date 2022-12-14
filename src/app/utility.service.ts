import { Injectable } from '@angular/core';
import { UserLoggedin } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  user: UserLoggedin | undefined;
  isAlertActivated: boolean;
  alertText: string;

  alert(txt: string) {
    this.alertText = txt;
    this.isAlertActivated = true;
  }
  setGlobalStyling() {
    for (const key in localStorage) {
      const val = localStorage[key];

      if (key == 'level') {
        document.body.style.filter = `brightness(${val}%)`;
        document.body.style.backgroundColor = `hsl(0, 0%, ${val}%)`;
      } else if (key == 'fontSize') {
        document.body.style.fontSize = 1 + val / 50 + 'em';
      } else if (key == 'margin') {
        document.body.style.margin = `0 ${val}rem`;
      } else if (key == 'letterSpacing') {
        document.body.style.letterSpacing = val + 'px';
      } else if (key == 'colorInvert')
        document.body.style.filter = `invert(${val}%)`;
    }
  }

  constructor() {}
}
