import {Component} from 'angular2/core';
import { PushNotificationComponent } from './ng2-notifications'

@Component({
    selector: 'form-test',
    template: `
    <main class="container">

    <push-notification #myNotification
      [title]="notification.title"
      [body]="notification.body"
      [icon]="notification.icon"
      [closeDelay]="notification.closeDelay"
      (action)="notification.action($event)">
    </push-notification>
  </main>
    `,
    directives: [PushNotificationComponent],
})
export class TestComponent {
public notification: any = {
  show: false,
  title: 'New Angular 2 Library!',
  body: 'ng2-notifications',
  icon: 'https://goo.gl/3eqeiE',
  action: function () {
    window.open('https://github.com/alexcastillo/ng2-notifications');
  }
};
}
