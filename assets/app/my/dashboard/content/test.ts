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

    <article class="row">
      <header class="col s12">
        <h5>
          <i class="left material-icons">add_alert</i>
          <span>ng2-notifications</span>
        </h5>
      </header>
      <form (submit)="myNotification.show()" class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input type="text" id="title" [(ngModel)]="notification.title" class="validate" required />
            <label class="active" for="title">Title</label>
          </div>
          <div class="input-field col s6">
            <input type="text" id="body" [(ngModel)]="notification.body" class="validate" required />
            <label class="active" for="body">Body</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input type="text" id="icon" [(ngModel)]="notification.icon" class="validate" />
            <label class="active" for="icon">Icon</label>
          </div>
          <div class="input-field col s6">
            <input type="text" id="closeDelay" placeholder="Milliseconds" [(ngModel)]="notification.closeDelay" class="validate" />
            <label class="active" for="closeDelay">Close Delay</label>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button type="submit" class="btn red darken-2 waves-effect waves-light">Show Notification</button>
          </div>
        </div>
      </form>
    </article>

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
