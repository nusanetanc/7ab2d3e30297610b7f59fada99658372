import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-test',
    template: `
    <body ng-app="orderByExample2">
    <div class="row">
        <h1 style="padding-left: 50px">TEST</h1>
    </div>
      <div ng-controller="ExampleController">
      <pre>Sort by = {{propertyName}}; reverse = {{reverse}}</pre>
      <hr/>
      <button ng-click="propertyName = null; reverse = false">Set to unsorted</button>
      <hr/>
      <table class="friends">
        <tr>
          <th>
            <button ng-click="sortBy('name')">Name</button>
            <span class="sortorder" ng-show="propertyName === 'name'" ng-class="{reverse: reverse}"></span>
          </th>
          <th>
            <button ng-click="sortBy('phone')">Phone Number</button>
            <span class="sortorder" ng-show="propertyName === 'phone'" ng-class="{reverse: reverse}"></span>
          </th>
          <th>
            <button ng-click="sortBy('age')">Age</button>
            <span class="sortorder" ng-show="propertyName === 'age'" ng-class="{reverse: reverse}"></span>
          </th>
        </tr>
        <tr ng-repeat="friend in friends | orderBy:propertyName:reverse">
          <td>{{friend.name}}</td>
          <td>{{friend.phone}}</td>
          <td>{{friend.age}}</td>
        </tr>
      </table>
    </div>
    </body>
    `,
    directives: [ROUTER_DIRECTIVES],
})
export class ContentTestComponent {

}
