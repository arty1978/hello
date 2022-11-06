import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Setting } from './brightness.interface';

@Component({
  selector: 'app-brightness',
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.css'],
})
export class BrightnessComponent implements OnInit {
  settings: Setting[] = [
    { field: 'level', title: 'רמת בהירות', value: 80, min: 20, max: 100 },
    { field: 'fontSize', title: 'גודל טקסט', value: 10, min: 10, max: 50 },
    {
      field: 'margin',
      title: 'ריווח פנימי של האתר',
      value: 5,
      min: 1,
      max: 10,
    },
    {
      field: 'letterSpacing',
      title: 'ריווח של האותיות',
      value: 1,
      min: 0,
      max: 5,
    },
    {
      field: 'colorInvert',
      title: 'היפוך צבעים',
      value: 0,
      min: 0,
      max: 100,
    },
  ];
  change(item: Setting, val: number) {
    item.value = val;
    localStorage[item.field] = val;

    this.utility.setGlobalStyling();
  }
  constructor(private utility: UtilityService) {}

  ngOnInit() {
    this.settings.forEach((setting) => {
      if (localStorage[setting.field]) {
        setting.value = +localStorage[setting.field];
      }
    });
  }
}
