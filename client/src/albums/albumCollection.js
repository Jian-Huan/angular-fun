angular
    .module('models.album', [])
    .factory('AlbumCollection', AlbumCollection);

function AlbumCollection($resource) {
    var AlbumCollection = $resource(
        'http://jsonplaceholder.typicode.com/albums' // ToDo: configure this as a constant
    );

    return {
        get: get
    };

    function get() {
        return AlbumCollection.query();
    }
}
