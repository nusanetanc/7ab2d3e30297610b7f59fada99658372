import {Component, Input, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import { Package } from './package';

@Component({
    selector: 'input-pack',
    template: `
    <div class="row marginTB10 marginL5">
        <div class="col-xs-6 col-sm-4">
            <span>Package Level</span>
        </div>
        <div class="col-xs-6 col-sm-1">
            <span>:</span>
        </div>
        <div class="col-xs-12 col-md-7">
            <input [(ngModel)]="packages.level" type="number" class="form-control inputForm" #namepackage id="namepackage" placeholder="Package Name" disabled/>
        </div>
    </div>
    <div class="row marginTB10 marginL5">
        <div class="col-xs-6 col-sm-4">
            <span>Package Price</span>
        </div>
        <div class="col-xs-6 col-sm-1">
            <span>:</span>
        </div>
        <div class="col-xs-12 col-md-7">
            <input [(ngModel)]="packages.price" type="number" class="form-control inputForm" #packageprice id="packageprice" placeholder="Package Price" disabled/>
        </div>
    </div>
    <div class="row marginTB10 marginL5">
        <div class="col-xs-6 col-sm-4">
            <span>Promo Name</span>
        </div>
        <div class="col-xs-6 col-sm-1">
            <span>:</span>
        </div>
        <div *ngIf="packages.type == 'Default'" class="col-xs-12 col-md-7">
          <input [(ngModel)]="default" type="text" class="form-control inputForm" #promoname id="promoname" placeholder="Promo Name" disabled/>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentInputPackComponent implements OnInit {
@Input() packid: string;
API = 'http://202.162.207.164:3000';
promo = 'Yes';
default = 'No';
packages: any[] = [];
  ngOnInit() {
      this.getPackages();
  }
  constructor(private http: Http) {}
  // Get all Subs from the API
      getPackages() {
          this.http.get(`${this.API}/package/package/${this.packid}`)
              .map(res => res.json())
              .subscribe(packages => {
                  this.packages = packages
              })
      }
}
