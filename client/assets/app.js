var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'SearchController'
        })      
    .when('/search',{
            templateUrl: 'partials/search.html',
            controller: 'SearchController'
        })
        .otherwise({
          redirectTo: '/'
        });

}); 


