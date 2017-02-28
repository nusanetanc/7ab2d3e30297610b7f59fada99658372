import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-newreport',
    template: `
    <!-- Page content -->
<div id="page-content-wrapper">
    <div class="content-header">
        <h3 id="home">
            <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
            </a>
            &nbsp; Send New Reports
        </h3>
    </div>

    <div class="page-content inset" data-spy="scroll" data-target="#spy">
        <div class="row subInfo">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-12">
                        <h4>TYPE OF PROBLEMS</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="formNewReport marginLR20">
                            <form>
                                <select name="problemCatagory">
                                    <option class="option" disabled="true" selected="true">-- Problem Catagory --</option>
                                    <option value="volvo">Internet Problem</option>
                                    <option value="saab">TV Problem</option>
                                    <option value="fiat">Billing Problem</option>
                                    <option value="fiat">Account Problem</option>
                                </select><br/>
                            </form>
                            <form>
                                <select name="internetProblem">
                                    <option class="option" disabled="true" selected="true">-- Select Internet Problem --</option>
                                    <option value="volvo">Internet Problem</option>
                                    <option value="saab">TV Problem</option>
                                    <option value="fiat">Billing Problem</option>
                                    <option value="fiat">Account Problem</option>
                                </select><br/>
                            </form>
                            <textarea id="message" class="input width100" name="message" rows="10" placeholder="*note"></textarea>
                            <a href="#" class="btn btn-default">
                                SEND
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="alertNewReports">
                            <div class="row">
                                <div class="col-sm-1">
                                    <i class="material-icons">info</i>
                                </div>
                                <div class="col-sm-11">
                                    Whats up..! What is going on ? <br> Please select the category of your problem
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentNewReportComponent {
}
