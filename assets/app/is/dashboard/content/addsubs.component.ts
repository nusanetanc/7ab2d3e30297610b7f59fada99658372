import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-addsubs',
    template: `
    <!-- Page content -->
    <div id="page-content-wrapper">
        <div class="content-header">
            <h3 id="home">
                <a id="menu-toggle" href="#" class="glyphicon glyphicon-menu-hamburger btn-menu toggle">
                </a>
                &nbsp; Add New Subscribers
            </h3>

        </div>

        <div class="page-content inset" data-spy="scroll" data-target="#spy">
            <div class="row">
                <div class="col-lg-12">
                    <div class="col-md-6" style="background-color: #FFF; color: #333; height: 1100px;">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 style="padding: 40px 15px 15px 20px;">PERSONAL INFORMATION</h4>
                                <form style="padding: 20px;">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputName" placeholder="Full Name"  id="name" #name>
                                        <input type="text" class="form-control" id="exampleInputHp" placeholder="Handphone">
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                                        <p>Upload your National Identity Card</p>
                                        <div class="form-control">
                                            <button type="button">choose file</button>
                                            <p>No choose file</p>
                                        </div>
                                    </div>
                                </form>
                                <h4 style="padding: 40px 15px 15px 20px;">INSTALLATION DATE</h4>
                                <p  style="padding: 20px;">Please select a installation date</p>
                                <div class="form-group" style="padding: 20px;">
                                    <div class='input-group date' id='datetimepicker1'>
                                        <input type='text' class="form-control" />
                                        <span class="input-group-addon">
                                            <span class="glyphicon glyphicon-calendar"></span>
                                        </span>
                                    </div>
                                </div>

                                <script type="text/javascript">
                                    $(function () {
                                        $('#datetimepicker1').datetimepicker();
                                    });
                                </script>
                                <p  style="padding: 20px;">Please select a available timeslot for that date</p>
                                <form style="padding: 20px;" action="">
                                    <input type="radio" name="vehicle" value="Time" /> 9:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 10:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 11:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 12:00 am PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 1:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 2:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 3:00 pm PST<br>
                                    <input type="radio" name="vehicle" value="Time" /> 4:00 pm PST
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6" style="background-color: #FFF; color: #333; height: 1100px;">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 style="padding: 40px 15px 15px 20px;">SUBSCRIPTION PLAN</h4>
                                <form style="padding: 20px;">
                                    <select name="package">
                                        <option disabled="true" selected="true">-- Select Package --</option>
                                        <option value="level1">Level 1 - Monthly - IDR 349 K</option>
                                        <option value="level2">Level 1 - Monthly - IDR 549 K</option>
                                        <option value="level3">Level 1 - Monthly - IDR 899 K</option>
                                        <option value="level4">Level 1 - Monthly - IDR 499 K</option>
                                        <option value="level5">Level 1 - Monthly - IDR 699 K</option>
                                        <option value="level6">Level 1 - Monthly - IDR 999 K</option>
                                    </select><br/>
                                </form>
                                <h4 style="padding: 40px 15px 15px 20px;">ADDRESS</h4>
                                <form style="padding: 20px;">
                                    <select style="" name="cars">
                                        <option disabled="true" selected="true" style="height: 30px;">-- Select your city --</option>
                                        <option value="volvo" >Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form style="padding: 20px;">
                                    <select name="property">
                                        <option class="option" disabled="true" selected="true">-- Select Property Name --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form style="padding: 20px;">
                                    <select name="type">
                                        <option class="option" disabled="true" selected="true">-- Select Type --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form style="padding: 20px;">
                                    <select name="cluster">
                                        <option class="option" disabled="true" selected="true">-- Select Cluster --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form style="padding: 20px;">
                                    <select name="block">
                                        <option class="option" disabled="true" selected="true">-- Select Block --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <form style="padding: 20px;">
                                    <select name="no">
                                        <option class="option" disabled="true" selected="true">-- Select No. --</option>
                                        <option value="volvo">Jakarta</option>
                                        <option value="saab">Bandung</option>
                                        <option value="fiat">Medan</option>
                                    </select><br/>
                                </form>
                                <button class="next btn btn-default dropdown-toggle" style="margin: 70px 20px 0 0;" type="button" (click)="addPerson(name.value)">
                                    REGISTER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentAddSubsComponent {

// Link to our api, pointing to localhost
  API = 'http://202.162.207.164:3000';

  // Declare empty list of people
  subs: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllSub();
  }

// Add one person to the API
  addSub(name) {
    this.http.post(`${this.API}/subscribe/addsub`, {name, age})
      .map(res => res.json())
      .subscribe(() => {
        this.getAllSub();
        console.log('input sukses');
      })
  }


}
