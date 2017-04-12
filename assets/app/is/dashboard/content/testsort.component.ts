import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {ConfirmModalComponent} from "./dashboard/content/confirmmodal.component";

declare let jsPDF;
declare let kendo;

@Component({
    selector: 'app',
    template: `
        <div class="container">
          <button class="btn btn-default" (click)=showConfirm()>Show confirm</button>
        </div>
      `
})

export class AppComponent {
    constructor(private dialogService:DialogService) {}
    showConfirm() {
        let disposable = this.dialogService.addDialog(ConfirmModalComponent, {
            title:'Confirm title',
            message:'Confirm message'})
            .subscribe((isConfirmed)=>{
                //We get dialog result
                if(isConfirmed) {
                    alert('accepted');
                }
                else {
                    alert('declined');
                }
            });
        //We can close dialog calling disposable.unsubscribe();
        //If dialog was not closed manually close it by timeout
        setTimeout(()=>{
            disposable.unsubscribe();
        },10000);
    }
}