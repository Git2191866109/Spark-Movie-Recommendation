angular.module('MoviesApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/movies', {
                controller: 'MoviesListCtrl',
                templateUrl: '/assets/partial/movies-list.html'
            })
            .when('/movies/:id', {
                controller: 'MoviesDetailsCtrl',
                templateUrl: '/assets/partial/movies-details.html'
            })
            .otherwise('/movies');
        $locationProvider.html5Mode(true);
    });