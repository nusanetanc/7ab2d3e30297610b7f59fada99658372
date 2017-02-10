import {Component} from "angular2/core";

@Component({
   selector: 'my-app',
   template: `
<body class="form-auth-is">
   <div class="container container-auth">
        <div class="top-margin text-center">
            <img class="logo-size" src="images/groovy.png">
            <div class="form">
                <div class="text">Sign in to continue to Information System</div>
                <div class="form-group">
                    <input type="text" class="form-control" id="email" placeholder="Email">
                    <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <a href="#" class="btn button-submit">SIGN IN</a>
                <div class="text text-other"><a href="isforgot.html">I forgot password</a></div>
            </div>
        </div>
    </div>
    <div class="container container-auth">
         <div class="top-margin text-center">
             <img class="logo-size" src="images/groovy.png">
             <div class="form">
                 <div class="text">Sign in to continue to Information System</div>
                 <div class="form-group">
                     <input type="text" class="form-control" id="email" placeholder="Email">
                     <input type="password" class="form-control" id="password" placeholder="Password">
                 </div>
                 <a href="#" class="btn button-submit">SIGN IN</a>
                 <div class="text text-other"><a href="isforgot.html">I forgot password</a></div>
             </div>
         </div>
     </div>
    <div class="container-fluid footer">
        <footer class="text-center">
            <p>Copyright 2016 Groovy. All right reserved.</p>
        </footer>
    </div>
</body>
`
})

export class AppComponent {

}
