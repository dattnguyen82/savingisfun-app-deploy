'use strict';

angular.module('savingisfun', [
    'ngRoute',
    'savingisfun.controller.statistics',
     'savingisfun.controller.account'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'pages/account.html'})
        .when('/account', {templateUrl: 'pages/account.html', controller: "accountController"})
         .when('/friends', {templateUrl: 'pages/friends.html', controller: "accountController"})
        .when('/statistics', {templateUrl: 'pages/statistics.html', controller: "statisticsController"})
        .otherwise({redirectTo: '/'});
}]).
run(function($rootScope) {
    console.log("loading app");
});
