import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrightnessComponent } from './brightness/brightness.component';
import { StudentsComponent } from './students/students.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'list', component: ListComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'brightness', component: BrightnessComponent },
];
