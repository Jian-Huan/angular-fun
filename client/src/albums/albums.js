angular
    .module('albums', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('albums', {
                url: '/albums',
                templateUrl: '/src/albums/albums.tpl.html',
                controller: 'AlbumsController'
            });
    })
    .controller('AlbumsController', function () {

    });