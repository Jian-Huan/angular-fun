angular
    .module('albums', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('albums', {
                url: '/albums',
                templateUrl: '/src/albums/albums.tpl.html',
                controller: 'AlbumsController'
            })
            .state('detail', {
                url: '/albums/:id',
                templateUrl: '/src/albums/detail/detail.tpl.html',
                controller: 'DetailController'
            });
    });