var app = angular
.module('app', [
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        // Home state and nested views
        .state('home', {
            url: '/home',
            templateUrl: '/views/partial-home.html'
        })
        // About page and multiple named views
        .state('about', {
            url: '/about'
        });

});
