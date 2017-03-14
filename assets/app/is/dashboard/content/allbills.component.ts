import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-allbills',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; All Billing
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="" class="glyphicon glyphicon-chevron-down sort-down"></a>
                    <div class="dropdown right">
                       <a class="btn btn-default dropdown-toggle buttonSort" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                           SUBS-ID
                       </a>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                           <li><a href="#">NAME</a></li>
                           <li><a href="#">ID</a></li>
                       </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="row subInfo">
                        <div class="col-sm-2 invoiceId"><span>GR-123456</span></div>
                        <div class="col-sm-8 invoiceList"><span>Yudi Nurhandi</span></div>
                        <div class="col-sm-1 invoiceList"><span class="green">Active</span></div>
                        <div class="col-sm-1 invoiceList"><span class="red">Not Paid</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAllBillsComponent {

}
