import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-addreport',
    template: `
    <!-- Page content -->
<div id="page-content-wrapper">
    <div class="content-header">
        <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
            &nbsp; BILLING
        </h3>

    </div>
    <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row subInfo">
                <div class="col-sm-12">

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4 class="titleH4">NEW INVOICE</h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 paddingL35">
                                    <form class="paddingTB20 paddingR30">
                                        <div class="form-group">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Billing Date">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Billing Due Date">
                                            <select name="package" class="inputForm">
                                                <option disabled="true" selected="true">-- Select Package --</option>
                                                <option value="level1">Level 1 - Monthly - IDR 349 K</option>
                                                <option value="level2">Level 1 - Monthly - IDR 549 K</option>
                                                <option value="level3">Level 1 - Monthly - IDR 899 K</option>
                                                <option value="level4">Level 1 - Monthly - IDR 499 K</option>
                                                <option value="level5">Level 1 - Monthly - IDR 699 K</option>
                                                <option value="level6">Level 1 - Monthly - IDR 999 K</option>
                                            </select><br/>
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Package Price">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Router Rent Fee">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="STB Rent Fee">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Cable/RJ45">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Instalation Fee">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Subtotal">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Promo Name">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Promo Price">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Tax 10%">
                                            <input type="text" class="form-control inputForm" id="exampleInputName" placeholder="Total Pay">
                                        </div>
                                    </form>
                                </div>
                            </div>

                    <div class="row">
                        <div class="col-sm-12 paddingR45">
                            <!-- Small modal -->
                            <button type="button" class="btn btn-default buttonOrange marginT20 marginL20" data-toggle="modal" data-target="#success">CONFIRM</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    </div>

</div></div><!-- END CONTENT -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentCreateInvoiceComponent {

}
