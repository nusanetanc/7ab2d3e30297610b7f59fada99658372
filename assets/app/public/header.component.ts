import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

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
                    <a [routerLink]="['Home']"><img class="navbar-logo" src="images/logo-groovy.png" alt="logo-groovy"/></a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                      <li><a [routerLink]="['Features']"><span class="navbar-menus"><strong>FEATURES</strong></span></a></li>
                      <li><a [routerLink]="['Packages']"><span class="navbar-menus"><strong>PACKAGES</strong></span></a></li>
                      <li><a [routerLink]="['Support']"><span class="navbar-menus"><strong>SUPPksadORT</strong></span></a></li>
                        <li class="active"><a [routerLink]="['Signin']"><span class="sign-in-only"><strong>SIGN asdIN</strong></span></a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent{

}