import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {SigninComponent} from "./signin.component";
import {ForgotComponent} from "./forgot.component";
@Component({
    selector: 'authentication',
    template: `
    <div>
       <div class="container container-auth">
            <div class="top-margin text-center">
                <img class="logo-size" src="images/groovy.png">
                <form-login></form-login>
                <form-forgot></form-forgot>
            </div>
        </div>
        <div class="container-fluid footer">
            <footer class="text-center">
                <p>Copyright 2016 Groovy. All right reserved.</p>
            </footer>
        </div>
    </div>
    `,
    directives: [SigninComponent, ForgotComponent, ROUTER_DIRECTIVES],
})
export class AuthenticationComponent {

}
