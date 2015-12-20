'use strict';

angular
    .module('albums')
    .controller('AlbumsController', AlbumsController);

AlbumsController.$inject = ['$scope', 'AlbumCollection'];

function AlbumsController($scope, AlbumCollection) {
    $scope.albums = AlbumCollection.get();

    $scope.sortByTitle = function () {
        $scope.albums = AlbumCollection.sortByTitle();
    };

    $scope.resetOrder = function () {
        $scope.albums = AlbumCollection.get();
    };

    $scope.delete = function (album) {
        album.$delete();
    };
}