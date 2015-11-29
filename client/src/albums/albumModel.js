angular
    .module('models.album', [])
    .factory('albumModel', albumModel);

function albumModel($resource) {
    var albumResource = $resource(
        // ToDo: configure this as a constant
        'http://jsonplaceholder.typicode.com/albums/:id',
        {id: '@id'}
    );

    return {
        getAllAlbums: getAllAlbums
    };

    function getAllAlbums() {
        // ToDo: use Album class instance
        return albumResource.query();
    }

    function Album(data) {
        angular.extend(this, data);
    }

    Album.prototype = {
        /*save: function () {
         var carData = //...
         return carResource.save(carData);
         }*/
    };
}