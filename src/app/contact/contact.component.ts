import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  phone: string = '';
  email: string = '';
  content: string = '';
  happiness: number = 41;
  fearLevel: number = 39;

  send() {
    this.utility.alert(
      `הטופס נוצר בהצלחה \n\n שם מלא: ${this.name}\n\n טלפון: ${this.phone}\n\n דוא"ל: ${this.email}`
    );

    console.log(`שם מלא: ${this.name}`);
    console.log(`טלפון: ${this.phone}`);
    console.log(`אימייל: ${this.email}`);
    console.log(`תוכן: ${this.content}`);
    console.log(`רמת שמחה: ${this.happiness}`);
    console.log(`רמת פחד: ${this.fearLevel}`);
  }

  constructor(private utility: UtilityService) {}

  ngOnInit(): void {}
}
