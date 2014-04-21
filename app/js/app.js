
angular.module('task', ['ngRoute','task.controller']).

config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'Inic'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'ListTask'});
  $routeProvider.otherwise({redirectTo: '/view1'});
});
