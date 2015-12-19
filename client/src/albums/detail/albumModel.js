angular
    .module('models.album')
    .factory('albumModel', albumModel);

function albumModel($resource) {
    var Album = $resource(
        // ToDo: configure this as a constant
        'http://jsonplaceholder.typicode.com/albums/:id',
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