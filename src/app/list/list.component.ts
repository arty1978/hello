import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  product: string;

  myList: string[] = ['מלפפון', 'עגבניה', 'גמבה'];
  addProduct() {
    this.myList.push(this.product);
    this.product = '';
  }

  constructor() {}

  ngOnInit() {}
}
