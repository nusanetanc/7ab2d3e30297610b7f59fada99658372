import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';


@Component({
    selector: 'form-addinformation',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; New Information
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                      <a [routerLink]="['Information']" class="btn btn-default buttonBack" type="button">
                          BACK
                      </a>
                </div>
            </div>
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
                                        <option class="option" disabled="true" selected="true">-- Select Target Information --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">All Region</option>
                                    </select><br/>
                                </form>
                                <form>
                                    <select name="internetProblem">
                                        <option class="option" disabled="true" selected="true">-- Select Information Category --</option>
                                        <option value="volvo">Internet Problem</option>
                                        <option value="saab">TV Problem</option>
                                        <option value="fiat">Billing Problem</option>
                                        <option value="fiat">Account Problem</option>
                                    </select><br/>
                                </form>
                                <textarea id="message" class="input width100" name="message" rows="10" placeholder="*note"></textarea>
                                <a href="" class="btn btn-default">
                                    SEND
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page content -->
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddInformationComponent {

}
