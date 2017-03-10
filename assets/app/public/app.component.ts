import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {HomeComponent} from "./content/home.component";
import {FeaturesComponent} from "./content/features.component";
import {PackagesComponent} from "./content/packages.component";
import {SupportComponent} from "./content/support.component";
import {SigninComponent} from "./content/signin.component";

@Component({
    selector: 'my-app',
    template: `
            <my-header></my-header><br>
            <router-outlet></router-outlet>
            <my-footer></my-footer>
`,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent, HomeComponent, FeaturesComponent, PackagesComponent, SupportComponent, SigninComponent]
})

@RouteConfig([
    {path: '/public', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/public/features', name: 'Features', component: FeaturesComponent},
    {path: '/public/packages', name: 'Packages', component: PackagesComponent},
    {path: '/public/support', name: 'Support', component: SupportComponent},
    {path: '/public/signin', name: 'Signin', component: SigninComponent},
])
export class AppComponent{

}