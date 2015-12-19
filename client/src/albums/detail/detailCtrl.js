'use strict';

angular
    .module('albums')
    .controller('DetailController', DetailController);

DetailController.$inject = ['$scope', '$stateParams', 'albumModel'];

function DetailController($scope, $stateParams, albumModel) {
    $scope.album = albumModel.findById($stateParams.id);
}