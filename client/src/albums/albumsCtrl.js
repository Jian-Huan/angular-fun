'use strict';

angular
    .module('albums')
    .controller('AlbumsController', AlbumsController);

AlbumsController.$inject = ['$scope', 'albumModel'];

function AlbumsController($scope, albumModel) {
    $scope.albums = albumModel.getAllAlbums();
}