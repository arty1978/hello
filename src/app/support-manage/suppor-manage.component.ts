import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Support } from '../support/support.interface copy';

@Component({
  selector: 'app-suppor-manage',
  templateUrl: './suppor-manage.component.html',
  styleUrls: [
    './suppor-manage.component.css',
    '../clients/clients.component.css',
  ],
})
export class SupporManageComponent implements OnInit {
  support: Support[] = [];
  isStatusDone: boolean;

  remove(item: Support) {
    if (!confirm('האם למחוק את הפנייה?')) {
      return;
    }

    const subscribe = this.http
      .delete<void>(`http://localhost:3000/support/${item.id}`, {
        withCredentials: true,
      })
      .subscribe(() => {
        const i = this.support.findIndex((x) => x.id == item.id);
        this.support.splice(i, 1);
        subscribe.unsubscribe();
      });
  }
  complete(item: Support) {
    if (!confirm('האם לסגור את הפנייה?')) {
      return;
    }

    const subscribe = this.http
      .put<void>(`http://localhost:3000/support/complete`, item)
      .subscribe(() => {
        const i = this.support.findIndex((x) => x.id == item.id);
        this.support.splice(i, 1);
        subscribe.unsubscribe();
      });
  }

  undo(item: Support) {
    if (!confirm(' האם לפתוח את הפנייה בשנית?')) {
      return;
    }

    const subscribe = this.http
      .put<void>(`http://localhost:3000/support/undo`, item, {
        withCredentials: true,
      })
      .subscribe(() => {
        const i = this.support.findIndex((x) => x.id == item.id);
        this.support.splice(i, 1);
        subscribe.unsubscribe();
      });
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((event) => {
      if (event['status'] === 'completed') {
        this.isStatusDone = true;

        const subscribe = this.http
          .get<Support[]>('http://localhost:3000/support/completed', {
            withCredentials: true,
          })
          .subscribe((data) => {
            this.support = data;
            subscribe.unsubscribe();
          });
      } else {
        this.isStatusDone = false;

        const subscribe = this.http
          .get<Support[]>('http://localhost:3000/support/opened', {
            withCredentials: true,
          })
          .subscribe((data) => {
            this.support = data;
            subscribe.unsubscribe();
          });
      }
    });
  }
}
