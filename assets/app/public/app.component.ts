import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {HomeComponent} from "./content/home.component";

@Component({
    selector: 'my-app',
    template: `
            <my-header></my-header><br>
            <router-outlet></router-outlet>
            <my-footer></my-footer>
`,
    directives: [HeaderComponent, FooterComponent, HomeComponent]
})

@RouteConfig([
    {path: '/public', name: 'Home', component: HomeComponent, useAsDefault: true},
])
export class AppComponent{

}