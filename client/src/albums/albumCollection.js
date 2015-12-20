angular
    .module('models.album', [])
    .factory('AlbumCollection', AlbumCollection);

function AlbumCollection($resource) {
    // ToDo: configure this as a constant
    var AlbumCollection = $resource(
        'http://jsonplaceholder.typicode.com/albums/:id',
        {id: '@id'},
        {'query': {method: 'GET', cache: true, isArray: true}}
    );

    return {
        get: get,
        sortByTitle: sort
    };

    function get() {
        return AlbumCollection.query();
    }

    function sort() {
        return AlbumCollection.query(function (albums) {
            return albums.sort(compareTitles);
        });
    }

    function compareTitles(a, b) {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    }
}