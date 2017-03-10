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
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Report
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row marginB20 marginR0">
                <div class="col-sm-12">
                    <a href="reportshistory.html" class="btn btn-default buttonBack" type="button">
                        BACK
                    </a>
                </div>
            </div>
            <div class="row subInfo roboto grey8b reportDetail">
                <div class="col-sm-12">
                    <div class="row marginB20">
                        <div class="col-sm-10 "><span><b class="grey333">Account can't login in other devices</b></span></div>
                        <div class="col-sm-2 "><span class="grey333">Status : <span class="red">On progress</span></span></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1 col-xs-12"><img class="ava" src="ava.png" alt="ava"></div>
                        <div class="col-sm-11 col-xs-12 postBy marginT10"><span>Posted <b class="grey333">11 Feb 2017 - 11.00 PM</b> by <b class="grey333">Jhon Doe</b><br>Internet Problem > Unstable Internet Connection</span></div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <hr  />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-1 col-xs-12"><img class="ava marginB10" src="ava.png" alt="ava"></div>
                        <div class="col-sm-10 col-xs-12">
                            <textarea id="message" class="input width100" name="message" rows="10" placeholder="*Type message here"></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 marginB20">
                            <button class="btn btn-default buttonOrange">
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentReplayReportComponent {

}
