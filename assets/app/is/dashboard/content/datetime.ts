//our root app component
import {Component, Attribute} from 'angular2/core'

@Component({
  selector: 'now',
  template: `
      <span (updateTime)="updateMyTime()">{{date | date: format}}</span>
    `
})
export class Now {
   private date;

  constructor(@Attribute("format") format) {
    this.format = format;
    this.date =  new Date();

    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  }

}
