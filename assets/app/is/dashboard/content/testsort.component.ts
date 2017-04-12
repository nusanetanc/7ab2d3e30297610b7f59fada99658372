import {Component} from 'angular2/core';
import {Pipe} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
import {ModalComponent} from "./dashboard/content/testmodal.component";

declare let jsPDF;
declare let kendo;
declare let ViewChild;

@Component({
    selector: 'form-test',
    template: `
  <button type="button" (click)="modal.show()">test</button>
  <app-modal>
    <div class="app-modal-header">
      header
    </div>
    <div class="app-modal-body">
      Whatever content you like, form fields, anything
    </div>
    <div class="app-modal-footer">
      <button type="button" class="btn btn-default" (click)="modal.hide()">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </app-modal>
  `
})
export class ContentTestComponent {

    @ViewChild(ModalComponent)
    public readonly modal: ModalComponent;
}
