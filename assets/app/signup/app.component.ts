import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import 'rxjs/add/operator/map';
import { Http, Headers} from 'angular2/http';
import { Sub } from './subs';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {SignupComponent} from "./content/signup.component";
import {DataComponent} from "./content/signup-data.component";
import {PackageComponent} from "./content/signup-package.component";
import {InstalldateComponent} from "./content/signup-installdate.component";
import {ProvideComponent} from "./content/signup-provide.component";
import {DoneComponent} from "./content/signup-done.component";

@Component({
    selector: 'my-app',
    template: `
            <my-header></my-header><br>
              <router-outlet></router-outlet>
            <my-footer></my-footer>
`,
    directives: [HeaderComponent, FooterComponent, SignupComponent, DataComponent, PackageComponent, InstalldateComponent, ProvideComponent, DoneComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/signup', name: 'Signup', component: SignupComponent, useAsDefault: true},
    {path: '/signup-data', name: 'SignupData', component: DataComponent},
    {path: '/signup-package', name: 'SignupPackage', component: PackageComponent},
    {path: '/signup-installdate', name: 'SignupInstalldate', component: InstalldateComponent},
    {path: '/signup-provide', name: 'SignupProvide', component: ProvideComponent},
    {path: '/signup-done', name: 'SignupDone', component: DoneComponent},
])

export class AppComponent{
}
