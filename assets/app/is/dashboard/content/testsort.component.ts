import {Component} from 'angular2/core';
import {Pipe} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-test',
    template: `
    <div id="page-content-wrapper">
          <div class="content-header">
              <h3 id="home">
                  <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                  </a>
                  &nbsp; Test
              </h3>
    
          </div>
    
          <div class="page-content inset" data-spy="scroll" data-target="#spy">
              <div class="row marginB20 marginR0">
                  <div class="col-sm-12">
                      <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                      <div class="dropdown right">
                          <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              NAME
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                              <li><a href="#">NAME</a></li>
                              <li><a href="#">ID</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-sm-12" *ngFor="#names of names | sortBy : 'first_name'">
                      <div class="row subInfo">
                          <div class="col-sm-2 invoiceId"><span>{{ names.id }}</span></div>
                          <div class="col-sm-5 invoiceList"><span>{{ names.first_name }}</span></div>
                          <div class="col-sm-5 invoiceList"><span>{{ names.last_name }}</span></div>
                      </div>
                  </div>
              </div>
          </div>
    </div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})

@Pipe({name: "sortBy"})

export class ContentTestComponent {

    names = [
        {"id": 1,"first_name": "Jason","last_name": "Martin"},
        {"id": 2,"first_name": "Douglas","last_name": "Holmes"},
        {"id": 3,"first_name": "Randy","last_name": "Woods"},
        {"id": 4,"first_name": "Thomas","last_name": "Castillo"},
        {"id": 5,"first_name": "Ryan","last_name": "Butler"},
        {"id": 6,"first_name": "Jose","last_name": "Turner"},
        {"id": 7,"first_name": "Carl","last_name": "Taylor"},
        {"id": 8,"first_name": "Brandon","last_name": "Mendoza"},
        {"id": 9,"first_name": "Willie","last_name": "Ross"},
        {"id": 10,"first_name": "Howard","last_name": "Montgomery"},
        {"id": 11,"first_name": "Ahmad","last_name": "Rifki"},
    ]

    /*ngOnInit(){
        this.names.sort( function(name1, name2) {
            if ( name1.first_name < name2.first_name ){
                return -1;
            }else if( name1.first_name > name2.first_name ){
                return 1;
            }else{
                return 0;
            }
        });
    }*/

    transform(array: Array<string>, args: string): Array<string> {
        array.sort((a: any, b: any) => {
            if ( a[args] < b[args] ){
                return -1;
            }else if( a[args] > b[args] ){
                return 1;
            }else{
                return 0;
            }
        });
        return array;
    }

}
