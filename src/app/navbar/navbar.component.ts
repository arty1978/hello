import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  ];
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.active = event.url;
        console.log(this.active);
      }
    });
  }

  ngOnInit() {}
}
