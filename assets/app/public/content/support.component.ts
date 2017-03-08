import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from 'angular2/common';
import {Http} from 'angular2/http';

@Component({
    selector: 'my-support',
    template: `
            <div class="container">
                <div class="support">
                    <h2><span class="support-content-header">Welcome To Groovy Help Center</span></h2>
                    <p><span class="support-content-text">Need help?<br>Find the answer to any question, from the basics all the way to advance guide</span></p>
            
                    <div class="support-menu">
                        <div class="support-content">
                            <button class="support-button-faq" data-toggle="collapse" data-target="#supportContent1">Apa itu Groovy ?<span style="float: right;margin-right:20px;" class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                            <div id="supportContent1" class="collapse">
                                <p class="support-paragraph-faq">Groovy adalah layanan hiburan yang menggabungkan Internet, Live TV, Video On Demand, Social TV, Catch Up TV Channel dan Radio Streaming menggunakan jalur internet.</p>
                            </div>
                        </div>
            
                        <div class="support-content">
                            <button class="support-button-faq" data-toggle="collapse" data-target="#supportContent2">Apa layanan yang ditawarkan Groovy ?<span style="float: right;margin-right:20px;" class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                            <div id="supportContent2" class="collapse">
                                <p class="support-paragraph-faq">Groovy menyediakan layanan yang sangat bervariasi. Mulai dari Live TV dengan 94+ channel lokal dan internasional, Video on Demand dengan film terbaru yang selalu update, Social TV yang berisi banyak video terbaik di berbagai kategorinya, Radio Streaming dan Catch Up TV yang mampu menghadirkan siaran televisi sampai dengan 3 hari sebelumnya</p>
                            </div>
                        </div>
            
                        <div class="support-content">
                            <button class="support-button-faq" data-toggle="collapse" data-target="#supportContent3">Berapa harga untuk langganan setiap bulanya ?<span style="float: right;margin-right:20px;" class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                            <div id="supportContent3" class="collapse">
                                <p class="support-paragraph-faq">Biaya langganan setiap bulanya bervariasi. Terdapat 3 paket yang bisa Anda sesuaikan dengan kebutuhan Anda. <a href="http://www.groovy.id/packages">http://www.groovy.id/packages</a></p>
                            </div>
                        </div>
            
                        <div class="support-content">
                            <button class="support-button-faq" data-toggle="collapse" data-target="#supportContent4">Apa yang saya butuhkan untuk berlangganan Groovy ?<span style="float: right;margin-right:20px;" class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                            <div id="supportContent4" class="collapse">
                                <p class="support-paragraph-faq">Untuk berlangganan Groovy Anda membutuhkan perangkat TV dengan input HDMI. Anda tidak perlu mempermasalahkan jaringan internet, karena Groovy sudah menyertakan jaringan internet berkecepatan tinggi bersama dengan paket Groovy.</p>
                            </div>
                        </div>
            
                        <div class="support-content">
                            <button class="support-button-faq" data-toggle="collapse" data-target="#supportContent5">Bagaimana cara mendaftar Groovy ?<span style="float: right;margin-right:20px;" class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                            <div id="supportContent5" class="collapse">
                                <p class="support-paragraph-faq">Untuk mendaftar di Groovy silahkan buka <a href="http://www.groovy.id">http://www.groovy.id</a> Kemudian klik Sign In di pojok kanan atas. Setelah modal popup terbuka klik Create Account di bagian bawah popup. Masukan data anda, pilih paket yang diinginkan serta lokasi pemasangan kemudian klik SIGN UP. Buka email Anda dan klik link konfirmasi pendaftaran setelah itu masukan password baru untuk akun Groovy Anda.</p>
                            </div>
                        </div>
            
                        <div class="support-content">
                            <button class="support-button-faq" data-toggle="collapse" data-target="#supportContent6">Bagaimana cara login ke akun Groovy ?<span style="float: right;margin-right:20px;" class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                            <div id="supportContent6" class="collapse">
                                <p class="support-paragraph-faq">Untuk masuk ke akun Groovy Anda silahkan buka <a href="http://www.groovy.id">http://www.groovy.id</a> Kemudian klik Sign In di pojok kanan atas. Setelah modal popup terbuka masukan email dan kata sandi Anda, kemudian klik SIGN IN. Setelah berhasil Anda akan diarahkan ke halaman dashboard.</p>
                            </div>
                        </div>
            
            
                    </div>
                </div>
            </div>
            
            <div class="support-content-2">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <span class="support-content2-text">Want to ask more details about the service Groovy?</span>
                            <a href="#" class="support-link-contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class SupportComponent{

}