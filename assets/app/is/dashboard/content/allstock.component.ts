import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-allstocks',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" style="cursor:pointer" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <div class="row marginB20 marginR0">
            <div class="col-sm-12">
                <a [routerLink]="['AddStock']" class="btn btn-default buttonOrange">
                    ADD NEW STOCK
                </a>
                <a (click)="sortRev()" style="cursor: pointer;" class="glyphicon glyphicon-chevron-down sort-down"></a>
                <button (click)="sortByName()" class="btn btn-default dropdown-toggle buttonSort right" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    NAME
                </button>
            </div>
        </div>
            <div class="row">
                <div class="col-sm-12" *ngFor="#good of goods">
                    <a [routerLink]="['InfoStock', {id: good._id}]">
                      <div class="row subInfo fontWeight300">
                          <div class="col-sm-11 invoiceId"><span>{{ good.name }}</span></div>
                          <div class="col-sm-1 invoiceList"><span>{{ good.stock }}</span></div>
                      </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllStocksComponent {

    // Sort By
    sortByName(){
        this.goods.sort( function(name1, name2) {
            if ( name1.name < name2.name ){
                return -1;
            }else if( name1.name > name2.name ){
                return 1;
            }else{
                return 0;
            }
        });
    }

    sortRev(){
        this.goods.sort( function(name1, name2) {
            if ( name1.name < name2.name ){
                return 1;
            }else if( name1.name > name2.name ){
                return -1;
            }else{
                return 0;
            }
        });
    }

    // Link to our api, pointing to localhost
      API = 'http://202.162.207.164:3000';

      goods: any[] = [];

      constructor(private http: Http) {}

      ngOnInit() {
        this.getAllGoods();
      }

    // Get all users from the API
    getAllGoods() {
      this.http.get(`${this.API}/goods/list`)
        .map(res => res.json())
        .subscribe(goods => {
          this.goods = goods
        })
    }
}
