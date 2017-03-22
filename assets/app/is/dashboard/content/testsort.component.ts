import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'form-test',
    template: `
    <body ng-app="orderByExample2">
    <div class="row">
        <h1 style="margin-left: 200px">TEST</h1>
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
    /*SortJS*/
    (function(angular) {
        'use strict';
        angular.module('orderByExample2', [])
            .controller('ExampleController', ['$scope', function($scope) {
                var friends = [
                    {name: 'John',   phone: '555-1212',  age: 10},
                    {name: 'Mary',   phone: '555-9876',  age: 19},
                    {name: 'Mike',   phone: '555-4321',  age: 21},
                    {name: 'Adam',   phone: '555-5678',  age: 35},
                    {name: 'Julie',  phone: '555-8765',  age: 29}
                ];

                $scope.propertyName = 'age';
                $scope.reverse = true;
                $scope.friends = friends;

                $scope.sortBy = function(propertyName) {
                    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                    $scope.propertyName = propertyName;
                };
            }]);
    })(window.angular);
}
