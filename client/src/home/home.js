angular
    .module('home', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'/src/home/home.tpl.html',
                controller:'HomeController'
        })
    })
    .controller('HomeController', function ( $scope ) {
        // ...
    });


