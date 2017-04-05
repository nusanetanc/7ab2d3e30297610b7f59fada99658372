//our root app component
import {Component, Attribute} from 'angular2/core'

@Component({
  selector: 'now',
  template: `
      <h2 (updateTime)="updateMyTime()">{{date | date: format}}</h2>
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
