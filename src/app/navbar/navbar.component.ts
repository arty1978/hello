import { Component, OnInit } from '@angular/core';
import { Menu } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [
    { route: '', title: 'בית' },
    { route: '', title: 'אודות' },
    { route: '', title: 'גלריה' },
    { route: '', title: 'צור קשר' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
