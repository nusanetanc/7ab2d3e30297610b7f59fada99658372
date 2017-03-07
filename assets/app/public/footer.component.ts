import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-footer',
    template: `
     <div class="jumbotron home-footer">
    <div class="container home-content">
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-sm-3">
                <p style="line-height:25px;"><span class="home-footer-header-text">Stay Connected</span><br>
                <span class="home-footer-body-text">
                    <a href="#">Facebook</a><br>
                    <a href="#">Twitter</a><br>
                    <a href="#">Instagram</a><br>
                    <a href="#">Youtube</a>
                </span></p>
            </div>
            <div class="col-xs-6 col-sm-6 col-sm-3">
                <p style="line-height:25px;"><span class="home-footer-header-text">Features</span><br>
                    <span class="home-footer-body-text">
                    <a href="#">Internet</a><br>
                    <a href="#">Live TV</a><br>
                    <a href="#">Video on Demand</a><br>
                    <a href="#">Social TV</a><br>
                    <a href="#">Catch-up TV Channel</a><br>
                    <a href="#">Radio Streaming</a>
                </span></p>
            </div>
            <div class="col-xs-6 col-sm-6 col-sm-3">
                <p style="line-height:25px;"><span class="home-footer-header-text">Groovy</span><br>
                <span class="home-footer-body-text">
                    <a href="#">About</a><br/>
                    <a href="">Career</a><br>
                    <a href="">Event</a><br>
                    <a href="">Contact</a><br>
                    <a href="">Privacy Policy</a><br>
                    <a href="">Terms of Use</a>
                </span></p>
            </div>
            <div class="col-xs-6 col-sm-6 col-sm-3">
                <p style="line-height:25px;"><span class="home-footer-header-text"><img src="images/groovy.png" alt="" width="120px"></span><br>
                    <span class="home-footer-body-text">Layanan Internet terbaik untuk komplek perumahan dan apartemen dengan mengkombinasikan layanan hiburan terlengkap mullai dari live TV, video on demand, social TV, catch-up TV dan radio streaming</span>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="footer-home">
    <div class="container footer-home-text">
        <p>Copyright 2016 Groovy. All Right Reserved.</p>
    </div>
</div>
`,
    directives: []
})
export class FooterComponent{

}