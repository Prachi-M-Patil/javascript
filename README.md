import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div [ngClass]="type">{{ message }}</div>`,
  styles: [`
    .success { color: green; }
    .warning { color: orange; }
    .error { color: red; }
  `]
})
export class NotificationComponent {
  @Input() type: 'success' | 'warning' | 'error';
  @Input() message: string;
}



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<{ type: 'success' | 'warning' | 'error', message: string } | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showNotification(type: 'success' | 'warning' | 'error', message: string) {
    this.notificationSubject.next({ type, message });
  }

  clearNotification() {
    this.notificationSubject.next(null);
  }
}


import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification-host',
  template: `
    <app-notification *ngIf="notification$ | async as notification"
                      [type]="notification.type"
                      [message]="notification.message"></app-notification>
    <button (click)="showNotification('success', 'Success!')">Show Success</button>
    <button (click)="showNotification('warning', 'Warning!')">Show Warning</button>
    <button (click)="showNotification('error', 'Error!')">Show Error</button>
  `
})
export class NotificationHostComponent {
  notification$ = this.notificationService.notification$;

  constructor(private notificationService: NotificationService) {}

  showNotification(type: 'success' | 'warning' | 'error', message: string) {
    this.notificationService.showNotification(type, message);
  }
}
