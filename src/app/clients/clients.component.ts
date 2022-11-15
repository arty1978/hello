import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './clients.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  searchVal: string;
  clients: Client[] = [];
  newClient: Client = {
    id: null,
    firstName: '',
    lastName: '',
    time: '',
    birthday: '',
    phone: '',
    email: '',
    city: '',
  };
  remove(client: Client) {
    if (!confirm(`האם למחוק את ${client.firstName}?`)) {
      return;
    }
    const subscribe = this.http
      .delete<void>(`http://localhost:3000/clients/${client.id}`)
      .subscribe(() => {
        const i = this.clients.findIndex((x) => x.id === client.id);
        this.clients.splice(i, 1);

        subscribe.unsubscribe(); //סיום האזנה לאחר טעינת כל הנתונים
      });
  }
  isValid() {
    return Boolean(
      this.newClient.firstName &&
        this.newClient.lastName &&
        this.newClient.city &&
        this.newClient.email &&
        this.newClient.phone
    );
  }
  add() {
    if (!this.isValid()) {
      return;
    }
    const subscribe = this.http
      .post<Client>('http://localhost:3000/clients', this.newClient)
      .subscribe((data) => {
        this.clients.unshift(data);
        this.newClient = {
          id: null,
          firstName: '',
          lastName: '',
          time: '',
          birthday: '',
          phone: '',
          email: '',
          city: '',
        };
        subscribe.unsubscribe();
      });
  }
  update(client: Client) {
    const subscribe = this.http
      .put<void>('http://localhost:3000/clients', client)
      .subscribe(() => {
        client.isEditState = false;
        subscribe.unsubscribe;
      });
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const subscribe = this.http
      .get<Client[]>('http://localhost:3000/clients')
      .subscribe((data) => {
        this.clients = data;

        subscribe.unsubscribe(); //סיום האזנה לאחר טעינת כל הנתונים
      });
  }
}
