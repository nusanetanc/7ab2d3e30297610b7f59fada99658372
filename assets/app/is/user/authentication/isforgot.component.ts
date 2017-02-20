import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'form-forgot',
    template: `
    <div class="container container-auth">
        <div class="top-margin text-center">
            <img class="logo-size" src="images/groovy.png">
            <div class="form">
                <div class="text">Help is on the way, reset password link has been sent to your email</div>
                <div class="button-resend">
                    <button type="submit" class="btn">RESEND</button>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class IsforgotComponent {

}
