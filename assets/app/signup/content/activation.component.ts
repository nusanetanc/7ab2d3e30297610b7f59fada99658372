import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-signin',
    template: `
    <div class="container container-auth-client">
    <div class="top-margin text-center">
        <h4>Enter new password for your Groovy Account</h4>
        <div class="form">
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="New Password">
                <input type="password" class="form-control" id="password" placeholder="Re-Type Password">
            </div>
            <button href="#" class="btn button-submit">SUBMIT</button>
        </div>
    </div>
</div>
`,
    directives: [ROUTER_DIRECTIVES],
})
export class ActivationComponent{
API = 'http://202.162.207.164:3000';
cities: City[];
  ngOnInit() {
      this.getAllCity();
  }
  constructor(private http: Http) {}
  // Get all City from the API
      getAllCity() {
          this.http.get(`${this.API}/city/listcity`)
              .map(res => res.json())
              .subscribe(cities => {
                  this.cities = cities
              })
      }
  addCity(cityname) {

      var body = `name=${cityname}`;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http
          .post(`${this.API}/city/addcity`,
              body, {
                  headers: headers
              })
          .subscribe(data => {
              alert('Add City Success');
              this.getAllCity();
          }, error => {
              console.log(JSON.stringify(error.json()));
          });
  }

}
