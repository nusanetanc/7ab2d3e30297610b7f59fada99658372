import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Goods } from './goods';

@Component({
    selector: 'form-goods',
    template: `
      <span>{{goods.name}}</span>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentGoodsNameComponent implements OnInit {
@Input() idgoods: string;
API = 'http://202.162.207.164:3000';
goods: any[] = [];
  ngOnInit() {
      this.getGoods();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getGoods() {
          this.http.get(`${this.API}/goods/detail/${this.idgoods}`)
              .map(res => res.json())
              .subscribe(goods => {
                  this.goods = goods
              })
      }
}
