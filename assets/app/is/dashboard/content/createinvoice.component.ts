import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-crateinvoice',
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
                                            <input type="text" class="form-control inputForm" #billingdate id="billingdate" placeholder="Billing Date">
                                            <input type="text" class="form-control inputForm" #billingduedate id="billingduedate" placeholder="Billing Due Date">
                                            <select #package id="package" class="inputForm">
                                                <option disabled="true" selected="true">-- Select Package --</option>
                                                <option value="level1">Level 1 - Monthly - IDR 349 K</option>
                                                <option value="level2">Level 1 - Monthly - IDR 549 K</option>
                                                <option value="level3">Level 1 - Monthly - IDR 899 K</option>
                                                <option value="level4">Level 1 - Monthly - IDR 499 K</option>
                                                <option value="level5">Level 1 - Monthly - IDR 699 K</option>
                                                <option value="level6">Level 1 - Monthly - IDR 999 K</option>
                                            </select><br/>
                                            <input type="text" class="form-control inputForm" #packageprice id="packageprice" placeholder="Package Price">
                                            <input type="text" class="form-control inputForm" #routerprice id="routerprice" placeholder="Router Rent Fee">
                                            <input type="text" class="form-control inputForm" #stbprice id="stbprice" placeholder="STB Rent Fee">
                                            <input type="text" class="form-control inputForm" #cablej45price id="cablej45price" placeholder="Cable/RJ45">
                                            <input type="text" class="form-control inputForm" #instalationprice id="instalationprice" placeholder="Instalation Fee">
                                            <input type="text" class="form-control inputForm" #subtotal id="subtotal" placeholder="Subtotal">
                                            <input type="text" class="form-control inputForm" #promoname id="promoname" placeholder="Promo Name">
                                            <input type="text" class="form-control inputForm" #promoprice id="promoprice" placeholder="Promo Price">
                                            <input type="text" class="form-control inputForm" #taxprice id="taxprice" placeholder="Tax 10%">
                                            <input type="text" class="form-control inputForm" #totalprice id="totalprice" placeholder="Total Pay">
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
