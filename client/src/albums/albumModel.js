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

    // http://stackoverflow.com/questions/16186887/angularjs-creating-objects-that-map-to-rest-resources-orm-style
    function getAllAlbums() {
        return albumResource.query(function (albums) {
            var albumsList = [];

            angular.forEach(albums, function(album) {
                this.push(new Album(album));
            }, albumsList);

            return albumsList;
        });
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