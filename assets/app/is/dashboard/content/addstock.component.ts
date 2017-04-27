import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-addstocks',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home" class="fontWeight300">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Stock
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">
                <div class="col-sm-6">
                    <div class="formNewReport marginLR20">
                        <form>
                            <select #inputGoods id="inputGoods">
                                <option class="option" disabled="true">-- Select Goods Name --</option>
                                <option *ngFor="#good of goods" >{{ good._id }}</option>
                            </select><br/>
                        </form>
                        <input #idbarcode type="text" class="form-control inputForm" id="idbarcode" placeholder="Code Barcode">
                        <button type="submit" class="btn btn-default buttonOrange">
                            SEND
                        </button>
                    </div>
                </div>
              </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddStocksComponent {
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
