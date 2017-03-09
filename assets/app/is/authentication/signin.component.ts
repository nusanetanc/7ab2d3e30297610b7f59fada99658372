import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'form-login',
    template: `
                <form>
                    <div class="text">Sign in to continue to Information System</div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="email" placeholder="Email">
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <a href="#" class="btn button-submit">SIGN IN</a>
                    <div class="text text-other"><a href="isforgot">I forgot password</a></div>
                </form>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class SigninComponent {

}
