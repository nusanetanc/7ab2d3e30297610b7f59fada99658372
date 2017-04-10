import {Component} from 'angular2/core';
import {Pipe} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';
declare let jsPDF;

@Component({
    selector: 'form-test',
    template: `
    <button
          (click)="download()">download
        </button>
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class ContentTestComponent {

    constructor() {
    }

    public download() {

        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('Test.pdf');
    }

}
