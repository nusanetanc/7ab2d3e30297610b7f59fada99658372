var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("header.component", ['angular2/core', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-header',
                        template: "  \n                <img class=\"logo-size\" src=\"images/groovy.png\">\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
System.register("footer.component", ['angular2/core', "angular2/router"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, router_2;
    var FooterComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_2.Component({
                        selector: 'my-footer',
                        template: "  \n        <div class=\"container-fluid footer\">\n            <footer class=\"text-center\">\n                <p>Copyright 2016 Groovy. All right reserved.</p>\n            </footer>\n        </div>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES],
                    }),
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_2("FooterComponent", FooterComponent);
        }
    }
});
System.register("authentication/form-forgot.component", ['angular2/core', "angular2/router"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_3, router_3;
    var ForgotComponent;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            ForgotComponent = (function () {
                function ForgotComponent() {
                }
                ForgotComponent = __decorate([
                    core_3.Component({
                        selector: 'my-forgot',
                        template: "  \n                <div class=\"form\">\n                    <div class=\"text\">Submit your email and we'll send a link to resend your password</div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n                    </div>\n                    <a href=\"email_verification.html\"><button type=\"submit\" class=\"btn\">RESET</button></a>\n                    <div class=\"text text-other\"><a href=\"signin.html\">Sign in</a></div>\n                </div>\n    ",
                        directives: [router_3.ROUTER_DIRECTIVES],
                    }),
                    __metadata('design:paramtypes', [])
                ], ForgotComponent);
                return ForgotComponent;
            }());
            exports_3("ForgotComponent", ForgotComponent);
        }
    }
});
System.register("app.component", ['angular2/core', "header.component", "footer.component", "authentication/form-forgot.component", "angular2/router"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_4, header_component_1, footer_component_1, form_forgot_component_1, router_4;
    var AppComponent;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (form_forgot_component_1_1) {
                form_forgot_component_1 = form_forgot_component_1_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_4.Component({
                        selector: 'my-app',
                        template: "  \n        <div class=\"container container-auth\">\n            <div class=\"top-margin text-center\">\n                <my-header></my-header>\n                <my-forgot></my-forgot>\n            </div>\n        </div>\n        <my-footer></my-footer>\n    ",
                        directives: [router_4.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, footer_component_1.FooterComponent, form_forgot_component_1.ForgotComponent]
                    }),
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_4("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiLCJmb290ZXIuY29tcG9uZW50LnRzIiwiYXV0aGVudGljYXRpb24vZm9ybS1mb3Jnb3QuY29tcG9uZW50LnRzIiwiYXBwLmNvbXBvbmVudC50cyIsImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtnQkFDQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVc7d0JBQ3JCLFFBQVEsRUFBRSwrRUFFVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQzs7bUNBQUE7Z0JBRUYsc0JBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURELDZDQUNDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQ0dEO2dCQUFBO2dCQUNBLENBQUM7Z0JBWkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLGdOQU1UO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOzttQ0FBQTtnQkFFRixzQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsNkNBQ0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDRUQ7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsNGpCQVNUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOzttQ0FBQTtnQkFFRixzQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsNkNBQ0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDRUQ7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsdVFBUVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsRUFBRSxrQ0FBZSxFQUFFLHVDQUFlLENBQUM7cUJBQ3JGLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztZQ2pCRCxtQkFBUyxDQUFDLDRCQUFZLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi93b3Jrc3BhY2UvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxuICAgIHRlbXBsYXRlOiBgICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibG9nby1zaXplXCIgc3JjPVwiaW1hZ2VzL2dyb292eS5wbmdcIj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCB7XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mb290ZXInLFxuICAgIHRlbXBsYXRlOiBgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBmb290ZXJcIj5cbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdodCAyMDE2IEdyb292eS4gQWxsIHJpZ2h0IHJlc2VydmVkLjwvcD5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG59IiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1mb3Jnb3QnLFxuICAgIHRlbXBsYXRlOiBgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlN1Ym1pdCB5b3VyIGVtYWlsIGFuZCB3ZSdsbCBzZW5kIGEgbGluayB0byByZXNlbmQgeW91ciBwYXNzd29yZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVtYWlsX3ZlcmlmaWNhdGlvbi5odG1sXCI+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG5cIj5SRVNFVDwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQgdGV4dC1vdGhlclwiPjxhIGhyZWY9XCJzaWduaW4uaHRtbFwiPlNpZ24gaW48L2E+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3Jnb3RDb21wb25lbnQge1xufSIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SGVhZGVyQ29tcG9uZW50fSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtGb290ZXJDb21wb25lbnR9IGZyb20gJy4vZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvcmdvdENvbXBvbmVudH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9mb3JtLWZvcmdvdC5jb21wb25lbnQnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGNvbnRhaW5lci1hdXRoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wLW1hcmdpbiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxteS1oZWFkZXI+PC9teS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPG15LWZvcmdvdD48L215LWZvcmdvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG15LWZvb3Rlcj48L215LWZvb3Rlcj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIEZvcmdvdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBcbn0iLCIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhcjIvdHlwaW5ncy9icm93c2VyLmQudHNcIi8+XG5pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50KTsiXX0=
