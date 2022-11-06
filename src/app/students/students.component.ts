import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  student: string;
  students: any[] = ['shuki', 'muki', 'puki'];
  addStudent() {
    this.students.push(this.student);
    this.student = '';
  }
  removeStudent(i: number) {
    this.students.splice(i, 1);
  }

  constructor() {}

  ngOnInit() {}
}
