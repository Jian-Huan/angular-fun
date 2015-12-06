'use strict';

angular
    .module('albums')
    .controller('AlbumsController', AlbumsController);

AlbumsController.$inject = ['$scope', 'AlbumCollection'];

function AlbumsController($scope, AlbumCollection) {
    $scope.albums = AlbumCollection.get();
}