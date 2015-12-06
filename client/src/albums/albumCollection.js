angular
    .module('models.album', [])
    .factory('AlbumCollection', AlbumCollection);

function AlbumCollection($resource) {
    // ToDo: configure this as a constant
    var AlbumCollection = $resource('http://jsonplaceholder.typicode.com/albums');

    return {
        get: get
    };

    function get() {
        return AlbumCollection.query();
    }
}
