import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-header',
    template: `
     <nav class="navbar navbar-default navbar-fixed-top navbar-homepage">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="../"><img class="navbar-logo" src="images/logo-groovy.png" alt="logo-groovy"/></a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right fontWeight300">
                    <li><a href="about"><span class="navbar-menus">ABOUT</span></a></li>
                    <li><a href="features"><span class="navbar-menus">FEATURES</span></a></li>
                    <li><a href="packages"><span class="navbar-menus">PACKAGES</span></a></li>
                    <li><a href="support"><span class="navbar-menus">SUPPORT</span></a></li>
                    <li><a href="contact"><span class="navbar-menus">CONTACT</span></a></li>
                    <li class="active"><a href="signin"><span class="sign-in-only">SIGN IN</span></a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent{

}