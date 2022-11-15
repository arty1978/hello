import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { Menu } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  firstName: string;
  active: string;

  menu: Menu[] = [
    { route: '/home', title: 'בית' },
    { route: '/list', title: 'רשימה' },
    { route: '/users', title: 'משתמשים' },
    { route: '/students', title: 'סטודנטים' },
    { route: '/contact', title: 'צור קשר' },
    { route: '/brightness', title: 'נגישות' },
    { route: '/clients', title: 'לקוחות' },
    { route: '/support', title: 'שירות לקוחות' },
    {
      route: '/support-manage/opened',
      title: 'ניהול פניות פתוחות',
      isConnected: true,
    },
    {
      route: '/support-manage/completed',
      title: 'ניהול פניות סגורות',
      isConnected: true,
    },
    // { route: '/register', title: 'הרשמה' },
    // { route: '/login', title: 'התחברות' },
  ];
  constructor(private router: Router, public utility: UtilityService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active = event.url;
        console.log(this.active);
      }
    });
  }

  ngOnInit() {}
}
