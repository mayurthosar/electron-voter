var app = angular.module('voter-app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"index.html"
        })
        .when('/about',{
            templateUrl:'about.html'
        });
});