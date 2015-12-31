angular
    .module('models.album')
    .factory('albumModel', albumModel);

albumModel.$inject = ['$resource', 'api'];

function albumModel($resource, api) {
    var Album = $resource(
        api.domain + api.album,
        {id: '@id'}
    );

    return {
        findById: getAlbumById
    };

    // http://stackoverflow.com/questions/16186887/angularjs-creating-objects-that-map-to-rest-resources-orm-style
    function Album(data) {
        angular.extend(this, data);
    }

    Album.prototype = {
        /*save: function () {
         var carData = //...
         return carResource.save(carData);
         }*/
    };

    function getAlbumById(id) {
        return Album.get({id: id});
    }
}