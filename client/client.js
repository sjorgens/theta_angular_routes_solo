var app = angular.module('routeApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/bsanders', {
            templateUrl: 'views/bsanders.html',
            controller: 'BSandersController'
        })
        .when('/omalley', {
            templateUrl: 'views/omalley.html',
            controller: 'OMalleyController'
        })
        .when('/dtrump', {
            templateUrl: 'views/dtrump.html',
            controller: 'DTrumpController'
        })
    $locationProvider.html5Mode(true);
}]);

app.controller('BSandersController', ['$scope', function($scope){

}]);

app.controller('OMalleyController', ['$scope', function($scope){

}]);
app.controller('DTrumpController', ['$scope', function($scope){

}]);